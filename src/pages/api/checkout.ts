// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from "@/lib/stripe";
import type { NextApiRequest, NextApiResponse } from "next";

export type CheckoutBody = {
  priceId: string;
};

export type CheckoutRes = {
  checkoutUrl?: string;
  error?: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CheckoutRes>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const { priceId } = req.body as CheckoutBody

  if (!priceId) {
    return res.status(400).json({ error: 'Product not found...' })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
        
      }
    ],
    
    mode: 'payment',
    success_url: `${process.env.NEXT_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_APP_URL}/`,
  })

  res.status(201).json({
    checkoutUrl: checkoutSession.url
  });
}
 