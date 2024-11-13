import {Href, RouteParamInput} from "expo-router";

const url = (href: any, params: RouteParamInput<any>): Href => {
    return { pathname: href, params: params}
};

export default url;
