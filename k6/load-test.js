import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const res = http.get('https://www.amazon.com.br/');

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}