import Stripe from 'stripe';

export class createChargeDto {
  card: Stripe.PaymentMethodCreateParams.Card;
  amount: number;
}
