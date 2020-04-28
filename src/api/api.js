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
    res = await protectedResourceAxios.post('/api/v1/protected/events/', body);
  } catch (err) {
    return err;
  }

  return res;
}

async function createCheckoutSession() {
  const body = {
    lineItems: [
      {
        name: 'T-shirt',
        description: 'Comfortable cotton t-shirt',
        amount: 500,
        currency: 'usd',
        quantity: 1,
      }],
    successUrl: `https://${process.env.VUE_APP_API_DOMAIN}/event/eventid?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `https://${process.env.VUE_APP_API_DOMAIN}/checkout`,
  };
  return protectedResourceAxios.post('/api/v1/protected/checkout/', body);
}

async function getEvent(id) {
  try {
    const { data } = await protectedResourceAxios.get(`/api/v1/protected/events/${id}`);
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
