// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from "@/lib/stripe";
import type { NextApiRequest, NextApiResponse } from "next";

export type CheckoutBody = {
  priceIds: string[]
};

export type CheckoutRes = {
  checkoutUrl?: string
  error?: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CheckoutRes>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const { priceIds } = req.body as CheckoutBody

  if (priceIds.length <= 0) {
    return res.status(400).json({ error: 'Product not found...' })
  }

  const lineItems = priceIds.reduce((acc, cur) => {
    const item = acc.find(item => item.valor === cur);

    if (item) {
      item.quantity++;
    } else {
      acc.push({ price: cur, quantity: 1 });
    }
    return acc;
  }, []);

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.NEXT_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_APP_URL}/`,
  })

  res.status(201).json({
    checkoutUrl: checkoutSession.url
  });
}
 