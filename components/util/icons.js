import {DiCss3,DiJavascript1,DiPython,DiDart} from 'react-icons/di'

export const icons = {
    css: <DiCss3/>,
    javascript: <DiJavascript1/>,
    python: <DiPython />,
    dart:<DiDart/>
};


export function createIcon(iconName) {
    if(!iconName) return;
    iconName = String(iconName).toLowerCase()
    return  icons[iconName]
}