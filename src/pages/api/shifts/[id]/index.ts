import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { shiftValidationSchema } from 'validationSchema/shifts';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.shift
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getShiftById();
    case 'PUT':
      return updateShiftById();
    case 'DELETE':
      return deleteShiftById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getShiftById() {
    const data = await prisma.shift.findFirst(convertQueryToPrismaUtil(req.query, 'shift'));
    return res.status(200).json(data);
  }

  async function updateShiftById() {
    await shiftValidationSchema.validate(req.body);
    const data = await prisma.shift.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteShiftById() {
    const data = await prisma.shift.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
