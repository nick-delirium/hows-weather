export default function changeUserIp(ip) {
  return {
    type: 'CHANGE_USER_IP',
    payload: ip,
  };
}