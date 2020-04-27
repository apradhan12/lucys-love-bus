import moment from 'moment';
import { protectedResourceAxios } from '../utils/auth/axios/axiosInstance';
import events from '../store/modules/events';

function formatTimestamp(date, time) {
  const res = moment(date, 'YYYY-MM-DD"');
  const hour = time.substring(0, 2);
  const minute = time.substring(3);
  res.add(hour, 'h').add(minute, 'm');
  return res.unix();
}

async function createEvent(event) {
  const body = {
    title: event.name,
    spotsAvailable: 10,
    thumbnail: events.img,
    details: {
      description: event.description,
      location: event.location,
      start: formatTimestamp(event.date, event.startTime),
      end: formatTimestamp(event.date, event.endTime),
    },
  };

  let res;
  try {
    res = await protectedResourceAxios.post(`${process.env.VUE_APP_API_DOMAIN}/api/v1/protected/events/`, body);
  } catch (err) {
    return err;
  }

  return res;
}

async function createCheckoutSession(lineItems) {
  const body = {
    payment_method_types: ['card'],
    line_items: [
      { ...lineItems },
      {
        name: 'T-shirt',
        description: 'Comfortable cotton t-shirt',
        images: ['https://example.com/t-shirt.png'],
        amount: 500,
        currency: 'usd',
        quantity: 1,
      }],
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',
  };

  let res;
  try {
    res = await protectedResourceAxios.post('https://localhost:8081/api/v1/protected/checkout/', body);
  } catch (err) {
    return err;
  }

  return res;
}

async function getEvent(id) {
  try {
    const { data } = await protectedResourceAxios.get(`${process.env.VUE_APP_API_DOMAIN}/api/v1/protected/events/${id}`);
    return data;
  } catch (err) {
    return err;
  }
}

export default {
  createEvent,
  createCheckoutSession,
  getEvent,
};
