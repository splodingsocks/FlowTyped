// @flow
import Recaptcha from 'react-recaptcha';

const success = <Recaptcha sitekey="works" verifyCallback={(res: string) => console.log(res) } />;

// $ExpectError
const fail = <Recaptcha siteKey="fails" />;

function Componet() {
  // $ExpectError
  return <Recaptcha verifyCallback={(res: boolean) => { console.log(res); } } sitekey="sasdf" />;
}
