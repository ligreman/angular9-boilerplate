/**
 * Tema oscuro para el selector de horas y minutos ngxTimepicker
 */
export const materialTimepickerDarkTheme = {
    container: {
        bodyBackgroundColor: '#46555c',
        buttonColor: '#f5f5f5',
        primaryFontFamily: 'Open Sans'
    },
    dial: {
        dialBackgroundColor: '#37474f'
    },
    clockFace: {
        clockFaceBackgroundColor: '#37474f',
        clockHandColor: '#ffd54f',
        clockFaceTimeInactiveColor: '#f5f5f5',
        clockFaceTimeActiveColor: '#000000de'
    }
};

/**
 * Formatos personalizados para las fechas
 */
export const dateCustomFormats = {
    parse: {
        dateInput: 'DD/MM/YYYY'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

/**
 * Información del servidor API
 */
export const apiServerInfo = {
    apiBasePath: '/api-front/'
};
