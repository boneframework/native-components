// import Bugsnag from '@bugsnag/expo';
// or sentry, whatever

const log = (message: any) => {
    console.log(message);
    // Bugsnag.notify(error);
};

const logObject = (json: object)=> {
    console.log(JSON.stringify(json, undefined, 4));
};

const logJson = (json: string)=> {
    const jsonObject = JSON.parse(json);
    console.log(JSON.stringify(jsonObject, undefined, 4));
};

const start = () => {
  // Bugsnag.start();
};

export default {
    log, start, logJson
}
