"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";

interface AddTransactionParams {
  name: string;
  type: TransactionType;
  category: TransactionCategory;
  description: string;
  amount: number;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: AddTransactionParams) => {
  addTransactionSchema.parse(params);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Usuário não autenticado.");
  }
  await db.transaction.create({
    data: { ...params, userId },
  });
};
