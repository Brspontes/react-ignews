import { stripe } from './../../../services/stripe';
import { query } from 'faunadb';
import { fauna } from './../../../services/fauna';

export async function saveSubscription(subscriptionId: string, customerId: string, createAction = false) {
  const userRef = await fauna.query(
    query.Select(
      'ref',
      query.Get(
        query.Match(
          query.Index('user_stripe_customer_id'),
          customerId
        )
      )
    )
  )

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  const subscriptionData = {
    id: subscriptionId,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id
  }

  if(createAction) {
    await fauna.query(
      query.Create(
        query.Collection('subscriptions'),
        { data: subscriptionData }
      )
    )
  } else {
    await fauna.query(
      query.Replace(//substitui tudo
        query.Select(
          'ref',
          query.Get(
            query.Match(
              query.Index('subscription_by_id'),
              subscription.id
            )
          )
        ),
        { data: subscriptionData }
      )
    )
  }
}
