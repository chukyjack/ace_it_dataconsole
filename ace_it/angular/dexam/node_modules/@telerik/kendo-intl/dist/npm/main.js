'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaultData = {
    en: {
        name: "en",
        identity: {
            version: {
                _number: "$Revision: 12418 $",
                _cldrVersion: "29"
            },
            language: "en"
        },
        territory: "US",
        numbers: {
            symbols: {
                decimal: ".",
                group: ",",
                list: ";",
                percentSign: "%",
                plusSign: "+",
                minusSign: "-",
                exponential: "E",
                superscriptingExponent: "×",
                perMille: "‰",
                infinity: "∞",
                nan: "NaN",
                timeSeparator: ":"
            },
            decimal: {
                patterns: [
                    "n"
                ],
                groupSize: [
                    3
                ]
            },
            scientific: {
                patterns: [
                    "nEn"
                ],
                groupSize: []
            },
            percent: {
                patterns: [
                    "n%"
                ],
                groupSize: [
                    3
                ]
            },
            currency: {
                patterns: [
                    "$n"
                ],
                groupSize: [
                    3
                ],
                "unitPattern-count-one": "n $",
                "unitPattern-count-other": "n $"
            },
            currencies: {
                BGN: {
                    displayName: "Bulgarian Lev",
                    "displayName-count-one": "Bulgarian lev",
                    "displayName-count-other": "Bulgarian leva",
                    symbol: "BGN"
                },
                EUR: {
                    displayName: "Euro",
                    "displayName-count-one": "euro",
                    "displayName-count-other": "euros",
                    symbol: "€",
                    "symbol-alt-narrow": "€"
                },
                USD: {
                    displayName: "US Dollar",
                    "displayName-count-one": "US dollar",
                    "displayName-count-other": "US dollars",
                    symbol: "$",
                    "symbol-alt-narrow": "$"
                }
            },
            localeCurrency: "USD",
            accounting: {
                patterns: [
                    "$n",
                    "($n)"
                ],
                groupSize: [
                    3
                ]
            }
        },
        calendar: {
            gmtFormat: "GMT{0}",
            gmtZeroFormat: "GMT",
            patterns: {
                d: "M/d/y",
                D: "EEEE, MMMM d, y",
                m: "MMM d",
                M: "MMMM d",
                y: "MMM y",
                Y: "MMMM y",
                F: "EEEE, MMMM d, y h:mm:ss a",
                g: "M/d/y h:mm a",
                G: "M/d/y h:mm:ss a",
                t: "h:mm a",
                T: "h:mm:ss a",
                s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
            },
            dateTimeFormats: {
                full: "{1} 'at' {0}",
                long: "{1} 'at' {0}",
                medium: "{1}, {0}",
                short: "{1}, {0}",
                availableFormats: {
                    Bh: "h B",
                    Bhm: "h:mm B",
                    Bhms: "h:mm:ss B",
                    d: "d",
                    E: "ccc",
                    EBhm: "E h:mm B",
                    EBhms: "E h:mm:ss B",
                    Ed: "d E",
                    Ehm: "E h:mm a",
                    EHm: "E HH:mm",
                    Ehms: "E h:mm:ss a",
                    EHms: "E HH:mm:ss",
                    Gy: "y G",
                    GyMMM: "MMM y G",
                    GyMMMd: "MMM d, y G",
                    GyMMMEd: "E, MMM d, y G",
                    h: "h a",
                    H: "HH",
                    hm: "h:mm a",
                    Hm: "HH:mm",
                    hms: "h:mm:ss a",
                    Hms: "HH:mm:ss",
                    hmsv: "h:mm:ss a v",
                    Hmsv: "HH:mm:ss v",
                    hmv: "h:mm a v",
                    Hmv: "HH:mm v",
                    M: "L",
                    Md: "M/d",
                    MEd: "E, M/d",
                    MMM: "LLL",
                    MMMd: "MMM d",
                    MMMEd: "E, MMM d",
                    MMMMd: "MMMM d",
                    "MMMMW-count-one": "'week' W 'of' MMMM",
                    "MMMMW-count-other": "'week' W 'of' MMMM",
                    ms: "mm:ss",
                    y: "y",
                    yM: "M/y",
                    yMd: "M/d/y",
                    yMEd: "E, M/d/y",
                    yMMM: "MMM y",
                    yMMMd: "MMM d, y",
                    yMMMEd: "E, MMM d, y",
                    yMMMM: "MMMM y",
                    yQQQ: "QQQ y",
                    yQQQQ: "QQQQ y",
                    "yw-count-one": "'week' w 'of' Y",
                    "yw-count-other": "'week' w 'of' Y"
                }
            },
            timeFormats: {
                full: "h:mm:ss a zzzz",
                long: "h:mm:ss a z",
                medium: "h:mm:ss a",
                short: "h:mm a"
            },
            dateFormats: {
                full: "EEEE, MMMM d, y",
                long: "MMMM d, y",
                medium: "MMM d, y",
                short: "M/d/yy"
            },
            days: {
                format: {
                    abbreviated: [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    narrow: [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    short: [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    wide: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    narrow: [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    short: [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    wide: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                }
            },
            months: {
                format: {
                    abbreviated: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    narrow: [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D"
                    ],
                    wide: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    narrow: [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D"
                    ],
                    wide: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                }
            },
            quarters: {
                format: {
                    abbreviated: [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                }
            },
            dayPeriods: {
                format: {
                    abbreviated: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    },
                    narrow: {
                        midnight: "mi",
                        am: "a",
                        "am-alt-variant": "am",
                        noon: "n",
                        pm: "p",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    },
                    wide: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    }
                },
                "stand-alone": {
                    abbreviated: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    },
                    narrow: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    },
                    wide: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    }
                }
            },
            eras: {
                format: {
                    wide: {
                        "0": "Before Christ",
                        "1": "Anno Domini",
                        "0-alt-variant": "Before Common Era",
                        "1-alt-variant": "Common Era"
                    },
                    abbreviated: {
                        "0": "BC",
                        "1": "AD",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    },
                    narrow: {
                        "0": "B",
                        "1": "A",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    }
                }
            },
            dateFields: {
                era: {
                    wide: "era"
                },
                year: {
                    wide: "year",
                    short: "yr.",
                    narrow: "yr."
                },
                quarter: {
                    wide: "quarter",
                    short: "qtr.",
                    narrow: "qtr."
                },
                month: {
                    wide: "month",
                    short: "mo.",
                    narrow: "mo."
                },
                week: {
                    wide: "week",
                    short: "wk.",
                    narrow: "wk."
                },
                day: {
                    wide: "day",
                    short: "day",
                    narrow: "day"
                },
                weekday: {
                    wide: "day of the week"
                },
                dayperiod: {
                    wide: "AM/PM"
                },
                hour: {
                    wide: "hour",
                    short: "hr.",
                    narrow: "hr."
                },
                minute: {
                    wide: "minute",
                    short: "min.",
                    narrow: "min."
                },
                second: {
                    wide: "second",
                    short: "sec.",
                    narrow: "sec."
                },
                zone: {
                    wide: "time zone"
                }
            }
        }
    },
    supplemental: {
        likelySubtags: {
            en: "en-Latn-US"
        },
        currencyData: {
            region: {
                US: [
                    {
                        USD: {
                            _from: "1792-01-01"
                        }
                    }
                ]
            }
        },
        weekData: {
            firstDay: {
                US: "sun"
            },
            weekendStart: {
                "001": "sat"
            },
            weekendEnd: {
                "001": "sun"
            }
        }
    }
};

function isString(value) {
    return typeof value === "string";
}

//The error is represented by unique name and corresponding message
//The message can contain placeholders with index, e.g. {0}, {1}

var errorDetails = {
    "NoLocale": "Missing locale info for '{0}'",
    "NoCurrency": "Cannot determine currency information. Please load the locale currencies data.",
    "NoSupplementalCurrency": "Cannot determine currency. Please load the supplemental currencyData.",
    "NoCurrencyRegion": "No currency data for region '{0}'",
    "NoCurrencyDisplay": "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
    "NoGMTInfo": "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
    "NoWeekData": "Cannot determine locale first day of week. Please load the supplemental weekData.",
    "NoFirstDay": "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
    "NoValidCurrency": "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
    "NoDateFieldNames": "Cannot determine the locale date field names. Please load the locale dateFields data."
};

var formatRegExp = /\{(\d+)}?\}/g;

var IntlError = function IntlError(ref) {
    var name = ref.name;
    var message = ref.message;

    if (!name || !message) {
        throw new Error("{ name: string, message: string } object is required!");
    }

    this.name = name;
    this.message = message;
};

IntlError.prototype.formatMessage = function formatMessage () {
        var values = [], len = arguments.length;
        while ( len-- ) values[ len ] = arguments[ len ];

    var flattenValues = flatten(values);

    var formattedMessage = this.message.replace(formatRegExp, function(match, index) {
        return flattenValues[parseInt(index, 10)];
    });

    return ((this.name) + ": " + formattedMessage);
};

IntlError.prototype.error = function error () {
        var values = [], len = arguments.length;
        while ( len-- ) values[ len ] = arguments[ len ];

    return new Error(this.formatMessage(values));
};

var flatten = function(arr) {
    return arr.reduce(function (a, b) { return a.concat(b); }, []);
};

var toIntlErrors = function(errors) {
    var predicate = function(prev, name) {
        prev[name] = new IntlError({ name: name, message: errors[name] });
        return prev;
    };

    return Object.keys(errors).reduce(predicate, {});
};

var errors = toIntlErrors(errorDetails);

function availableLocaleInfo(fullName, suffixes) {
    var parts = fullName.split("-");
    var language = parts[0];
    var script = parts[1];
    var territory = parts[2];

    return cldr[fullName] || (suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory]) || (suffixes.indexOf(script) !== -1 && cldr[language + "-" + script]) || cldr[language];
}

function localeFullName(language, suffixes) {
    var likelySubtags = cldr.supplemental.likelySubtags;

    for (var idx = 0; idx < suffixes.length; idx++) {
        var name = likelySubtags[language + "-" + suffixes[idx ]];
        if (name) {
            return name;
        }
    }

    if (likelySubtags[language]) {
        return likelySubtags[language];
    }
}

var cldr = defaultData;

function getLocaleInfo(locale) {
    var info;
    if (isString(locale)) {
        info = localeInfo(locale);
    } else {
        info = locale;
    }
    return info;
}

function localeInfo(locale) {
    if (cldr[locale]) {
        return cldr[locale];
    }

    var likelySubtags = cldr.supplemental.likelySubtags;
    if (likelySubtags) {
        var parts = locale.split("-");
        var language = parts[0];
        var suffixes = parts.slice(1);
        var fullName = localeFullName(language, suffixes);
        var info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
        if (info) {
            return info;
        }
    }

    throw errors.NoLocale.error(locale);
}

var DECIMAL = "decimal";
var CURRENCY = "currency";
var ACCOUNTING = "accounting";
var PERCENT = "percent";
var SCIENTIFIC = "scientific";

var CURRENCY_PLACEHOLDER = "$";
var PERCENT_PLACEHOLDER = "%";
var NUMBER_PLACEHOLDER = "n";

var LIST_SEPARATOR = ";";
var GROUP_SEPARATOR = ",";

var POINT = ".";
var EMPTY = "";

var DEFAULT_LOCALE = "en";

var LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
var LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";

var patternRegExp = /([#,0.]+)/g;
var cldrCurrencyRegExp = /¤/g;

function getPatterns(pattern) {
    patternRegExp.lastIndex = 0;

    return pattern.replace(cldrCurrencyRegExp, CURRENCY_PLACEHOLDER).replace(patternRegExp, NUMBER_PLACEHOLDER).split(LIST_SEPARATOR);
}

function getGroupSize(pattern) {
    patternRegExp.lastIndex = 0;

    var numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[0])[0].split(POINT);
    var integer = numberPatterns[0];

    var groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function(group) {
        return group.length;
    }).reverse();

    return groupSize;
}

function loadCurrencyUnitPatterns(currencyInfo, currencyFormats) {
    for (var field in currencyFormats) {
        if (field.startsWith("unitPattern")) {
            currencyInfo[field] = currencyFormats[field].replace("{0}", NUMBER_PLACEHOLDER).replace("{1}", CURRENCY_PLACEHOLDER);
        }
    }
}

function loadNumbersInfo(locale, info) {
    var localeInfo$$1 = cldr[locale];
    var numbers = localeInfo$$1.numbers = localeInfo$$1.numbers || {};
    numbers.symbols = numbers.symbols || {};
    for (var field in info) {
        if (field === LATIN_NUMBER_SYMBOLS) {
            Object.assign(numbers.symbols, info[field]);
        } else if (field.includes(LATIN_NUMBER_FORMATS)) {
            var style = field.substr(0, field.indexOf(LATIN_NUMBER_FORMATS));
            var pattern = info[field].standard;
            numbers[style] = {
                patterns: getPatterns(pattern)
            };
            if (style === CURRENCY) {
                numbers[style].groupSize = getGroupSize((info[DECIMAL + LATIN_NUMBER_FORMATS] || info[field]).standard);
                loadCurrencyUnitPatterns(numbers[style], info[field]);
                numbers[ACCOUNTING] = {
                    patterns: getPatterns(info[field][ACCOUNTING]),
                    groupSize: numbers[style].groupSize
                };
            } else {
                numbers[style].groupSize = getGroupSize(pattern);
            }
        } else if (field === "currencies") {
            numbers.currencies = info[field];
        }
    }
}

var predefinedDatePatterns = {
    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
};

var YEAR_REGEX = /y+/g;
var SHORT_DATE = [ [ "dateFormats", "short" ] ];

var datePatterns = {
    D: [ [ "dateFormats", "full" ] ],
    m: [ [ "dateTimeFormats", "availableFormats", "MMMd" ] ],
    M: [ [ "dateTimeFormats", "availableFormats", "MMMMd" ] ],
    y: [ [ "dateTimeFormats", "availableFormats", "yMMM" ] ],
    Y: [ [ "dateTimeFormats", "availableFormats", "yMMMM" ] ],
    F: [ [ "dateFormats", "full" ], [ "timeFormats", "medium" ] ],
    g: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "short" ] ],
    G: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "medium" ] ],
    t: [ [ "timeFormats", "short" ] ],
    T: [ [ "timeFormats", "medium" ] ]
};

function toArray(obj) {
    var result = [];
    var names = Object.getOwnPropertyNames(obj);
    for (var idx = 0; idx < names.length; idx++) {
        var value = obj[names[idx]];
        result.push(value);
    }
    return result;
}

function getCalendarNames(info, isObj) {
    var result = {};
    for (var formatType in info) {
        var names = result[formatType] = {};
        for (var format in info[formatType]) {
            var formats = info[formatType][format];
            names[format] = isObj ? formats : toArray(formats);
        }
    }
    return result;
}

function getEraNames(eras) {
    var result = {};
    var format = result.format = {};
    var eraNameMap = {
        eraAbbr: "abbreviated",
        eraNames: "wide",
        eraNarrow: "narrow"
    };

    for (var eraFormatName in eras) {
        var formatName = eraNameMap[eraFormatName];
        format[formatName] = eras[eraFormatName];
    }

    return result;
}

function loadCalendarNames(locale, calendar) {
    var localeCalendar = cldr[locale].calendar;
    localeCalendar.days = getCalendarNames(calendar.days);
    localeCalendar.months = getCalendarNames(calendar.months);
    localeCalendar.quarters = getCalendarNames(calendar.quarters);
    localeCalendar.dayPeriods = getCalendarNames(calendar.dayPeriods, true);

    localeCalendar.eras = getEraNames(calendar.eras);
}

function loadCalendarDateFields(locale, fields) {
    var localeCalendar = cldr[locale].calendar;
    var dateFields = {};

    for (var field in fields) {
        var ref = field.split('-');
        var fieldName = ref[0];
        var formatType = ref[1]; if ( formatType === void 0 ) formatType = 'wide';
        var fieldInfo = dateFields[fieldName] || {};
        var displayName = fields[field].displayName;

        if (!displayName) { continue; }

        fieldInfo[formatType] = displayName;
        dateFields[fieldName] = fieldInfo;
    }

    localeCalendar.dateFields = dateFields;
}

function getPredefinedFormat(paths, calendar) {
    var result = [];

    for (var pathIdx = 0; pathIdx < paths.length; pathIdx++) {
        var fields = paths[ pathIdx ];
        var pattern = calendar;
        for (var idx = 0; idx < fields.length; idx++) {
            pattern = pattern[fields[idx]];
        }
        result.push(pattern);
    }

    return result.join(" ");
}

function loadCalendarPatterns(locale, calendar) {
    var cldrCalendar = cldr[locale].calendar;
    var patterns = cldrCalendar.patterns = {};

    patterns.d = getPredefinedFormat(SHORT_DATE, calendar).replace(YEAR_REGEX, 'y');

    for (var pattern in datePatterns) {
        patterns[pattern] = getPredefinedFormat(datePatterns[pattern], calendar);
    }

    for (var pattern$1 in predefinedDatePatterns) {
        patterns[pattern$1] = predefinedDatePatterns[pattern$1];
    }

    var dateTimeFormats = calendar.dateTimeFormats;
    cldrCalendar.dateTimeFormats = {
        full: dateTimeFormats.full,
        long: dateTimeFormats.long,
        medium: dateTimeFormats.medium,
        short: dateTimeFormats.short,
        availableFormats: dateTimeFormats.availableFormats
    };
    cldrCalendar.timeFormats = calendar.timeFormats;
    cldrCalendar.dateFormats = calendar.dateFormats;
}


function loadCalendarInfo(locale, info) {
    var calendar = cldr[locale].calendar = cldr[locale].calendar || {};
    for (var field in info) {
        if (field === "timeZoneNames") {
            calendar.gmtFormat = info[field].gmtFormat;
            calendar.gmtZeroFormat = info[field].gmtZeroFormat;
        } else if (field === "calendars" && info[field].gregorian) {
            loadCalendarPatterns(locale, info[field].gregorian);
            loadCalendarNames(locale, info[field].gregorian);
        } else if (field === "fields") {
            loadCalendarDateFields(locale, info.fields);
        }
    }
}

function territoryFromName(name, identity) {
    var likelySubtags = cldr.supplemental.likelySubtags;
    var parts = name.split("-");
    if (likelySubtags) {
        var likelyName = likelySubtags[name] || likelySubtags[parts[0]];
        if (likelyName) {
            parts = likelyName.split("-");
        }
    }

    if (identity) {
        for (var idx = parts.length - 1; idx >= 1; idx--) {
            var part = parts[idx];
            if (part === identity.variant || part === identity.script) {
                parts.splice(idx, 1);
            }
        }
    }

    var length = parts.length;

    if (length > 1) {
        var territory = parts[length - 1];
        return territory.toUpperCase();
    }
}

function localeTerritory(info) {
    if (info.territory) {
        return info.territory;
    }

    var name = info.name;
    var identity = info.identity;
    var territory;

    if (identity && identity.territory) {
        territory = identity.territory;
    } else {
        territory = territoryFromName(name, identity);
    }

    info.territory = territory;

    return territory;
}

function loadLocale(locale, info) {
    for (var field in info) {
        if (field === "numbers") {
            loadNumbersInfo(locale, info[field]);
        } else if (field === "dates") {
            loadCalendarInfo(locale, info[field]);
        }
    }
}

function load() {
    var arguments$1 = arguments;

    var length = arguments.length;
    for (var idx = 0; idx < length; idx++) {
        var entry = arguments$1[idx];
        if (entry.main) {
            var locale = Object.keys(entry.main)[0];
            var info = entry.main[locale];
            var localeInfo$$1 = cldr[locale] = cldr[locale] || {};

            localeInfo$$1.name = localeInfo$$1.name || locale;
            localeInfo$$1.identity = localeInfo$$1.identity || info.identity;

            localeTerritory(localeInfo$$1);
            loadLocale(locale, info);
        } else if (entry.supplemental) {
            if (entry.supplemental.weekData) {
                cldr.supplemental.weekData = {
                    firstDay: entry.supplemental.weekData.firstDay,
                    weekendStart: entry.supplemental.weekData.weekendStart,
                    weekendEnd: entry.supplemental.weekData.weekendEnd
                };
            } else {
                Object.assign(cldr.supplemental, entry.supplemental);
            }
        }
    }
}

function setData(data) {
    var locale = data.name;
    var info = cldr[locale] = cldr[locale] || {};
    if (data.likelySubtags) {
        var supplemental = cldr.supplemental = cldr.supplemental || {};
        supplemental.likelySubtags = Object.assign(supplemental.likelySubtags || {}, data.likelySubtags);
    }

    var numbers = info.numbers;

    Object.assign(info, data);

    if (numbers && data.numbers) {
        info.numbers = Object.assign({}, numbers, data.numbers);
    }
}

function dateFieldName(options, locale) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    var info = localeInfo(locale);
    var dateFields = info.calendar.dateFields;
    if (!dateFields) {
        throw errors.NoDateFieldNames.error();
    }

    var fieldNameInfo = dateFields[options.type] || {};

    return fieldNameInfo[options.nameType] || fieldNameInfo['wide'];
}

function lowerArray(arr) {
    var result = [];
    for (var idx = 0; idx < arr.length; idx++) {
        result.push(arr[idx].toLowerCase());
    }
    return result;
}

function lowerObject(obj) {
    var result = {};
    for (var field in obj) {
        result[field] = obj[field].toLowerCase();
    }
    return result;
}

function cloneLower(obj) {
    var result = Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
    return result;
}

function dateFormatNames(locale, options) {
    var type = options.type;
    var nameType = options.nameType;
    var standAlone = options.standAlone;
    var lower = options.lower;
    var info = getLocaleInfo(locale);
    var formatType = standAlone ? "stand-alone" : "format";
    var lowerNameType = (lower ? "lower-" : EMPTY) + nameType;
    var formatNames = info.calendar[type][formatType];
    var result = formatNames[lowerNameType];
    if (!result && lower) {
        result = formatNames[lowerNameType] = cloneLower(formatNames[nameType]);
    }
    return result;
}

function parseRangeDate(value) {
    var parts = value.split('-');
    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var day = parseInt(parts[2], 10);

    return new Date(year, month, day);
}

/* eslint-disable consistent-return */

var NoCurrency = errors.NoCurrency;
var NoCurrencyDisplay = errors.NoCurrencyDisplay;
var NoSupplementalCurrency = errors.NoSupplementalCurrency;
var NoCurrencyRegion = errors.NoCurrencyRegion;
var NoValidCurrency = errors.NoValidCurrency;

var DEFAULT_CURRENCY_FRACTIONS = 2;
var SYMBOL = "symbol";
var INVALID_CURRENCY_CODE = 'XXX';

var GLOBAL_CURRENCIES = {
    '001': 'USD', // 001 refers to world. not sure if it is correct to assume USD but seems better than throw an error
    '150': 'EUR' // 150 territory for Europe

};

function getCurrencyInfo(locale, currency, throwIfNoValid) {
    var info = getLocaleInfo(locale);
    var currencies = info.numbers.currencies;
    if (!currencies) {
        if (throwIfNoValid) {
            throw NoCurrency.error();
        }

        return;
    }

    var currencyDisplayInfo = currencies[currency];

    if (!currencyDisplayInfo) {
        if (throwIfNoValid) {
            throw NoCurrencyDisplay.error();
        }

        return;
    }

    return currencyDisplayInfo;
}

function lengthComparer(a, b) {
    return b.length - a.length;
}

function regionCurrency(regionCurrencies) {
    var latestValidUntil, latestValidUntilRange;
    var latestStillValid, latestStillValidDate;

    for (var idx = 0; idx < regionCurrencies.length; idx++) {
        var currency = regionCurrencies[idx];
        var code = Object.keys(currency)[0];
        var info = currency[code];
        if (code !== INVALID_CURRENCY_CODE && info._tender !== 'false' && info._from) {
            if (!info._to) {
                var stillValidDate = parseRangeDate(info._from);
                if (!latestStillValidDate || latestStillValidDate < stillValidDate) {
                    latestStillValid = code;
                    latestStillValidDate = stillValidDate;
                }
            } else if (!latestStillValid) {
                var validFrom = parseRangeDate(info._from);
                var validTo = parseRangeDate(info._to);
                if (!latestValidUntilRange || latestValidUntilRange.to < validTo || latestValidUntilRange.from < validFrom) {
                    latestValidUntil = code;
                    latestValidUntilRange = {
                        from: validFrom,
                        to: validTo
                    };
                }
            }
        }
    }

    return latestStillValid || latestValidUntil;
}

function currencyDisplays(locale, currency, throwIfNoValid) {
    if ( throwIfNoValid === void 0 ) throwIfNoValid = true;

    var currencyInfo = getCurrencyInfo(locale, currency, throwIfNoValid);
    if (!currencyInfo) {
        return;
    }

    if (!currencyInfo.displays) {
        var displays = [ currency ];
        for (var field in currencyInfo) {
            displays.push(currencyInfo[field]);
        }
        displays.sort(lengthComparer);
        currencyInfo.displays = displays;
    }

    return currencyInfo.displays;
}

function currencyDisplay(locale, options) {
    var value = options.value;
    var currency = options.currency;
    var currencyDisplay = options.currencyDisplay; if ( currencyDisplay === void 0 ) currencyDisplay = SYMBOL;

    if (currencyDisplay === "code") {
        return currency;
    }

    var currencyInfo = getCurrencyInfo(locale, currency, true);
    var result;

    if (currencyDisplay === SYMBOL) {
        result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL];
    } else {
        if (typeof value === undefined || value !== 1) {
            result = currencyInfo["displayName-count-other"];
        } else {
            result = currencyInfo["displayName-count-one"];
        }
    }

    return result;
}

function currencyFractionOptions(code) {
    var minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
    var maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;

    var fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];

    if (fractions && fractions._digits) {
        maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function territoryCurrencyCode(territory, throwIfNoValid) {
    if ( throwIfNoValid === void 0 ) throwIfNoValid = true;

    if (GLOBAL_CURRENCIES[territory]) {
        return GLOBAL_CURRENCIES[territory];
    }

    var currencyData = cldr.supplemental.currencyData;
    if (!currencyData) {
        if (throwIfNoValid) {
            throw NoSupplementalCurrency.error();
        }

        return;
    }

    var regionCurrencies = currencyData.region[territory];

    if (!regionCurrencies) {
        if (throwIfNoValid) {
            throw NoCurrencyRegion.error(territory);
        }

        return;
    }

    var currencyCode = regionCurrency(regionCurrencies);

    return currencyCode;
}

function localeCurrency(locale, throwIfNoValid) {
    var info = getLocaleInfo(locale);
    var numbers = info.numbers;

    if (!numbers.localeCurrency) {
        var currency = territoryCurrencyCode(localeTerritory(info), throwIfNoValid);

        if (!currency && throwIfNoValid) {
            throw NoValidCurrency.error(info.name);
        }

        numbers.localeCurrency = currency;
    }

    return numbers.localeCurrency;
}

var DAYS_OF_WEEK = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

var DEFAULT_TERRITORY = '001';

var NoWeekData = errors.NoWeekData;
var NoFirstDay = errors.NoFirstDay;

function firstDay(locale) {
    var info = getLocaleInfo(locale);

    if (!isNaN(info.firstDay)) {
        return info.firstDay;
    }

    var weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData.error();
    }

    var firstDay = weekData.firstDay[localeTerritory(info)] || weekData.firstDay[DEFAULT_TERRITORY];

    if (!firstDay) {
        throw NoFirstDay.error();
    }

    info.firstDay = DAYS_OF_WEEK.indexOf(firstDay);

    return info.firstDay;
}

var NoWeekData$1 = errors.NoWeekData;

function weekendRange(locale) {
    var info = getLocaleInfo(locale);

    if (info.weekendRange) {
        return info.weekendRange;
    }

    var weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData$1.error();
    }

    var territory = localeTerritory(info);
    var start = weekData.weekendStart[territory] || weekData.weekendStart[DEFAULT_TERRITORY];
    var end = weekData.weekendEnd[territory] || weekData.weekendEnd[DEFAULT_TERRITORY];

    info.weekendRange = {
        start: DAYS_OF_WEEK.indexOf(start),
        end: DAYS_OF_WEEK.indexOf(end)
    };

    return info.weekendRange;
}

function numberSymbols(locale) {
    var info = getLocaleInfo(locale);

    return info.numbers.symbols;
}

function formatCurrencySymbol(info, options) {
    if ( options === void 0 ) options = {};

    if (!options.currency) {
        options.currency = localeCurrency(info, true);
    }

    var display = currencyDisplay(info, options);

    return display;
}

function groupInteger(number, start, end, options, info) {
    var symbols = info.numbers.symbols;
    var decimalIndex = number.indexOf(symbols.decimal);
    var groupSizes = options.groupSize.slice();
    var groupSize = groupSizes.shift();

    var integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;

    var integer = number.substring(start, integerEnd);
    var result = number;
    var integerLength = integer.length;

    if (integerLength >= groupSize) {
        var idx = integerLength;
        var parts = [];

        while (idx > -1) {
            var value = integer.substring(idx - groupSize, idx);
            if (value) {
                parts.push(value);
            }
            idx -= groupSize;
            var newGroupSize = groupSizes.shift();
            groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

            if (groupSize === 0) {
                value = integer.substring(0, idx);
                if (value) {
                    parts.push(value);
                }
                break;
            }
        }

        integer = parts.reverse().join(symbols.group);
        result = number.substring(0, start) + integer + number.substring(integerEnd);
    }

    return result;
}

function isCurrencyStyle(style) {
    return style === CURRENCY || style === ACCOUNTING;
}

function pad(number, digits, right) {
    if ( digits === void 0 ) digits = 2;
    if ( right === void 0 ) right = false;

    var count = digits - String(number).length;
    var result = number;

    if (count > 0) {
        var padString = new Array(count + 1).join("0");
        result = right ? number + padString : padString + number;
    }

    return result;
}

var MAX_PRECISION = 20;

function round(value, precision) {
    var result = value;
    var decimals = precision || 0;

    result = result.toString().split('e');
    result = Math.round(Number(result[0] + 'e' + (result[1] ? (Number(result[1]) + decimals) : decimals)));

    result = result.toString().split('e');
    result = Number(result[0] + 'e' + (result[1] ? (Number(result[1]) - decimals) : -decimals));

    return result.toFixed(Math.min(decimals, MAX_PRECISION));
}

var DEFAULT_DECIMAL_ROUNDING = 3;
var DEFAULT_PERCENT_ROUNDING = 0;

var trailingZeroRegex = /0+$/;

function fractionOptions(options) {
    var minimumFractionDigits = options.minimumFractionDigits;
    var maximumFractionDigits = options.maximumFractionDigits;
    var style = options.style;
    var isCurrency = isCurrencyStyle(style);
    var currencyFractions;
    if (isCurrency) {
        currencyFractions = currencyFractionOptions(options.currency);
    }

    if (minimumFractionDigits === undefined) {
        minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
    }

    if (maximumFractionDigits === undefined) {
        if (style === PERCENT) {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
        } else if (isCurrency) {
            maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
        } else {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
        }
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function applyPattern(value, pattern, symbol) {
    var result = EMPTY;
    for (var idx = 0, length = pattern.length; idx < length; idx++) {
        var ch = pattern.charAt(idx);

        if (ch === NUMBER_PLACEHOLDER) {
            result += value;
        } else if (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) {
            result += symbol;
        } else {
            result += ch;
        }
    }
    return result;
}

function currencyUnitPattern(info, value) {
    var currencyInfo = info.numbers.currency;
    var pattern = value !== 1 ? currencyInfo["unitPattern-count-other"] : currencyInfo["unitPattern-count-one"];
    if (value < 0) {
        pattern = pattern.replace(NUMBER_PLACEHOLDER, ("-" + NUMBER_PLACEHOLDER));
    }

    return pattern;
}


function standardNumberFormat(number, options, info) {
    var symbols = info.numbers.symbols;
    var style = options.style;
    var isCurrency = isCurrencyStyle(style);

    //return number in exponential format
    if (style === SCIENTIFIC) {
        var exponential = options.minimumFractionDigits !== undefined ? number.toExponential(options.minimumFractionDigits) : number.toExponential();
        return exponential.replace(POINT, symbols.decimal);
    }

    var value = number;
    var symbol;

    if (isCurrency) {
        options.value = value;
        symbol = formatCurrencySymbol(info, options);
    }

    if (style === PERCENT) {
        value *= 100;
        symbol = symbols.percentSign;
    }

    var ref = fractionOptions(options);
    var minimumFractionDigits = ref.minimumFractionDigits;
    var maximumFractionDigits = ref.maximumFractionDigits;

    value = round(value, maximumFractionDigits);

    var negative = value < 0;

    var parts = value.split(POINT);

    var integer = parts[0];
    var fraction = pad(parts[1] ? parts[1].replace(trailingZeroRegex, EMPTY) : EMPTY, minimumFractionDigits, true);

    //exclude "-" if number is negative.
    if (negative) {
        integer = integer.substring(1);
    }

    if (options.minimumIntegerDigits) {
        integer = pad(integer, options.minimumIntegerDigits);
    }

    var formattedValue = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, info) : integer;

    if (fraction) {
        formattedValue += symbols.decimal + fraction;
    }

    var pattern;

    if (isCurrency && options.currencyDisplay === "name") {
        pattern = currencyUnitPattern(info, number);
    } else {
        var patterns = options.patterns;
        pattern = negative ? patterns[1] || ("-" + patterns[0]) : patterns[0];
    }

    if (pattern === NUMBER_PLACEHOLDER && !negative) {
        return formattedValue;
    }

    var result = applyPattern(formattedValue, pattern, symbol);

    return result;
}

var PLACEHOLDER = "__??__";

var SHARP = "#";
var ZERO = "0";

var literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
var trailingZerosRegExp = /(\.(?:[0-9]*[1-9])?)0+$/g;
var trailingPointRegExp = /\.$/;
var commaRegExp = /\,/g;

function setFormatLiterals(formatOptions) {
    var format = formatOptions.format;
    if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
        var literals = formatOptions.literals = [];
        formatOptions.format = format.replace(literalRegExp, function(match) {
            var quoteChar = match.charAt(0).replace("\\", EMPTY);
            var literal = match.slice(1).replace(quoteChar, EMPTY);

            literals.push(literal);

            return PLACEHOLDER;
        });
    }
}

function trimTrailingZeros(value, lastZero) {
    var trimRegex;

    if (lastZero === 0) {
        trimRegex = trailingZerosRegExp;
    } else {
        trimRegex = new RegExp(("(\\.[0-9]{" + lastZero + "}[1-9]*)0+$"), 'g');
    }

    return value.replace(trimRegex, '$1').replace(trailingPointRegExp, EMPTY);
}

function roundNumber(formatOptions) {
    var number = formatOptions.number;
    var format = formatOptions.format;
    var decimalIndex = format.indexOf(POINT);

    if (decimalIndex !== -1) {
        var zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
        var sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
        var hasZero = zeroIndex > -1;
        var hasSharp = sharpIndex > -1;
        var fraction = number.toString().split("e");

        if (fraction[1]) {
            fraction = round(number, Math.abs(fraction[1]));
        } else {
            fraction = fraction[0];
        }
        fraction = fraction.split(POINT)[1] || EMPTY;

        var precision = fraction.length;
        var trailingZeros = -1;

        if (!hasZero && !hasSharp) {
            formatOptions.format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
            decimalIndex = -1;
            precision = 0;
        } else if (hasZero && zeroIndex > sharpIndex) {
            precision = zeroIndex;
        } else if (sharpIndex > zeroIndex) {
            if (hasSharp && precision > sharpIndex) {
                precision = sharpIndex;
            } else if (hasZero && precision < zeroIndex) {
                precision = zeroIndex;
            }

            trailingZeros = hasZero ? zeroIndex : 0;
        }

        if (precision > -1) {
            number = round(number, precision);
            if (trailingZeros > -1) {
                number = trimTrailingZeros(number, trailingZeros);
            }
        }
    } else {
        number = round(number);
    }

    if (formatOptions.negative && (number * -1) >= 0) {
        formatOptions.negative = false;
    }

    formatOptions.number = number;
    formatOptions.decimalIndex = decimalIndex;
}

function isConstantFormat(format) {
    return format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1;
}

function setValueSpecificFormat(formatOptions) {
    var number = formatOptions.number;
    var format = formatOptions.format;
    format = format.split(LIST_SEPARATOR);
    if (formatOptions.negative && format[1]) {
        format = format[1];
        formatOptions.hasNegativeFormat = true;
    } else if (number === 0) {
        var zeroFormat = format[2];
        format = zeroFormat || format[0];
        if (zeroFormat && isConstantFormat(zeroFormat)) {
            formatOptions.constant = zeroFormat;
        }
    } else {
        format = format[0];
    }

    formatOptions.format = format;
}

function setStyleOptions(formatOptions, info) {
    var format = formatOptions.format;

    //multiply number if the format has percent
    if (format.indexOf(PERCENT_PLACEHOLDER) !== -1) {
        formatOptions.style = PERCENT;
        formatOptions.symbol = info.numbers.symbols.percentSign;
        formatOptions.number *= 100;
    }

    if (format.indexOf(CURRENCY_PLACEHOLDER) !== -1) {
        formatOptions.style = CURRENCY;
        formatOptions.symbol = formatCurrencySymbol(info);
    }
}

function setGroupOptions(formatOptions) {
    formatOptions.hasGroup = formatOptions.format.indexOf(GROUP_SEPARATOR) > -1;
    if (formatOptions.hasGroup) {
        formatOptions.format = formatOptions.format.replace(commaRegExp, EMPTY);
    }
}

function placeholderIndex(index1, index2, start) {
    var index;
    if (index1 === -1 && index2 !== -1) {
        index = index2;
    } else if (index1 !== -1 && index2 === -1) {
        index = index1;
    } else {
        index = start ? Math.min(index1, index2) : Math.max(index1, index2);
    }
    return index;
}

function setPlaceholderIndices(formatOptions) {
    var format = formatOptions.format;
    var sharpIndex = format.indexOf(SHARP);
    var zeroIndex = format.indexOf(ZERO);

    var start = placeholderIndex(sharpIndex, zeroIndex, true);

    sharpIndex = format.lastIndexOf(SHARP);
    zeroIndex = format.lastIndexOf(ZERO);

    var end = placeholderIndex(sharpIndex, zeroIndex);

    if (start === format.length) {
        end = start;
    }

    formatOptions.start = start;
    formatOptions.end = end;
    formatOptions.lastZeroIndex = zeroIndex;
}

function replaceStyleSymbols(number, style, symbol) {
    var result = number;
    if (style === CURRENCY || style === PERCENT) {
        result = EMPTY;
        for (var idx = 0, length = number.length; idx < length; idx++) {
            var ch = number.charAt(idx);
            result += (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) ? symbol : ch;
        }
    }
    return result;
}

function replaceLiterals(number, literals) {
    var result = number;
    if (literals) {
        var length = literals.length;
        for (var idx = 0; idx < length; idx++) {
            result = result.replace(PLACEHOLDER, literals[idx]);
        }
    }
    return result;
}

function replacePlaceHolders(formatOptions, info) {
    var start = formatOptions.start;
    var end = formatOptions.end;
    var negative = formatOptions.negative;
    var format = formatOptions.format;
    var decimalIndex = formatOptions.decimalIndex;
    var lastZeroIndex = formatOptions.lastZeroIndex;
    var hasNegativeFormat = formatOptions.hasNegativeFormat;
    var hasGroup = formatOptions.hasGroup;
    var number = formatOptions.number;
    var value = number.toString().split(POINT);
    var length = format.length;
    var integer = value[0];
    var fraction = value[1] || EMPTY;
    var integerLength = integer.length;
    var replacement = EMPTY;

    number = format.substring(0, start);

    if (negative && !hasNegativeFormat) {
        number += "-";
    }

    for (var idx = start; idx < length; idx++) {
        var ch = format.charAt(idx);

        if (decimalIndex === -1) {
            if (end - idx < integerLength) {

                number += integer;
                break;
            }
        } else {
            if (lastZeroIndex !== -1 && lastZeroIndex < idx) {
                replacement = EMPTY;
            }

            if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
                number += integer;
                idx = decimalIndex;
            }

            if (decimalIndex === idx) {
                number += (fraction ? info.numbers.symbols.decimal : EMPTY) + fraction;
                idx += end - decimalIndex + 1;
                continue;
            }
        }

        if (ch === ZERO) {
            number += ch;
            replacement = ch;
        } else if (ch === SHARP) {
            number += replacement;
        }
    }

    if (hasGroup) {
        number = groupInteger(number, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, (integerLength + start)), info.numbers.decimal, info);
    }

    if (end >= start) {
        number += format.substring(end + 1);
    }

    return number;
}

function applyCustomFormat(formatOptions, info) {
    var number = formatOptions.number;
    if (formatOptions.start !== -1) {
        number = replacePlaceHolders(formatOptions, info);
        number = replaceStyleSymbols(number, formatOptions.style, formatOptions.symbol);
        number = replaceLiterals(number, formatOptions.literals);
    }

    return number;
}

function customNumberFormat(number, format, info) {
    var formatOptions = {
        negative: number < 0,
        number: Math.abs(number),
        format: format
    };

    setValueSpecificFormat(formatOptions);

    if (formatOptions.constant) {
        return formatOptions.constant;
    }

    setFormatLiterals(formatOptions);
    setStyleOptions(formatOptions, info);
    setGroupOptions(formatOptions);
    roundNumber(formatOptions);
    setPlaceholderIndices(formatOptions);

    return applyCustomFormat(formatOptions, info);
}

var standardFormatRegExp = /^(n|c|p|e|a)(\d*)$/i;

function standardFormatOptions(format) {
    var formatAndPrecision = standardFormatRegExp.exec(format);

    if (formatAndPrecision) {
        var options = {
            style: DECIMAL
        };

        var style = formatAndPrecision[1].toLowerCase();

        if (style === "c") {
            options.style = CURRENCY;
        } else if (style === "a") {
            options.style = ACCOUNTING;
        } else if (style === "p") {
            options.style = PERCENT;
        } else if (style === "e") {
            options.style = SCIENTIFIC;
        }

        if (formatAndPrecision[2]) {
            options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
        }

        return options;
    }
}

function formatOptions(format) {
    var options;
    if (isString(format)) {
        options = standardFormatOptions(format);
    } else {
        options = format;
    }

    return options;
}

function formatNumber(number, format, locale) {
    if ( format === void 0 ) format = NUMBER_PLACEHOLDER;
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    if (number === undefined || number === null) {
        return EMPTY;
    }

    if (!isFinite(number)) {
        return String(number);
    }

    var info = localeInfo(locale);
    var options = formatOptions(format);

    var result;
    if (options) {
        var style = options.style || DECIMAL;
        result = standardNumberFormat(number, Object.assign({}, info.numbers[style], options), info);
    } else {
        result = customNumberFormat(number, format, info);
    }

    return result;
}

function isNumber(value) {
    return typeof value === "number";
}

var exponentRegExp = /[eE][\-+]?[0-9]+/;
var nonBreakingSpaceRegExp = /\u00A0/g;

function cleanNegativePattern(number, patterns) {
    if (patterns.length > 1) {
        var parts = (patterns[1] || EMPTY).replace(CURRENCY_PLACEHOLDER, EMPTY).split(NUMBER_PLACEHOLDER);
        if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) {
            return number.replace(parts[0], EMPTY).replace(parts[1], EMPTY);
        }
    }
}

function cleanCurrencyNumber(value, info, format) {
    var options = formatOptions(format) || {};
    var isCurrency = isCurrencyStyle(options.style);
    var number = value;
    var negative;

    var currency = options.currency || localeCurrency(info, isCurrency);

    if (currency) {
        var displays = currencyDisplays(info, currency, isCurrency);
        if (displays) {
            for (var idx = 0; idx < displays.length; idx++) {
                var display = displays[idx];
                if (number.includes(display)) {
                    number = number.replace(display, EMPTY);
                    isCurrency = true;
                    break;
                }
            }
        }

        if (isCurrency) {
            var cleanNumber = cleanNegativePattern(number, info.numbers.currency.patterns) ||
                cleanNegativePattern(number, info.numbers.accounting.patterns);

            if (cleanNumber) {
                negative = true;
                number = cleanNumber;
            }

        }
    }

    return {
        number: number,
        negative: negative
    };
}

function parseNumber(value, locale, format) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;
    if ( format === void 0 ) format = {};

    if (!value && value !== 0) {
        return null;
    }

    if (isNumber(value)) {
        return value;
    }

    var info = localeInfo(locale);
    var symbols = info.numbers.symbols;

    var number = value.toString();
    var isPercent;

    if (exponentRegExp.test(number)) {
        number = parseFloat(number.replace(symbols.decimal, POINT));
        return isNaN(number) ? null : number;
    }

    var negativeSignIndex = number.indexOf("-");
    if (negativeSignIndex > 0) {
        return null;
    }

    var isNegative = negativeSignIndex > -1;
    var ref = cleanCurrencyNumber(number, info, format);
    var negativeCurrency = ref.negative;
    var newNumber = ref.number;

    number = newNumber;
    isNegative = negativeCurrency !== undefined ? negativeCurrency : isNegative;

    if (format.style === PERCENT || number.indexOf(symbols.percentSign) > -1) {
        number = number.replace(symbols.percentSign, EMPTY);
        isPercent = true;
    }

    number = number.replace("-", EMPTY)
          .replace(nonBreakingSpaceRegExp, " ")
          .split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join(EMPTY)
          .replace(symbols.decimal, POINT);

    number = parseFloat(number);

    if (isNaN(number)) {
        number = null;
    } else if (isNegative) {
        number *= -1;
    }

    if (number && isPercent) {
        number /= 100;
    }

    return number;
}

var formatRegExp$1 = /\{(\d+)}/g;

function formatString(format) {
    var values = arguments;

    return format.replace(formatRegExp$1, function (match, index) {
        var value = values[parseInt(index, 10) + 1];

        return value;
    });
}

var REMOVAL_PENALTY = 120;
var ADDITION_PENALTY = 20;
var LENGHT_DELTA = [ 2, 1, 5, 3, 4 ];
var LONG_LESS_PENALTY_DELTA = -2;
var SHORT_LESS_PENALTY_DELTA = -1;
var SHORT_MORE_PENALTY_DELTA = 1;
var LONG_MORE_PENALTY_DELTA = 2;

var PENALTIES = {};
PENALTIES[LONG_LESS_PENALTY_DELTA.toString()] = 8;
PENALTIES[SHORT_LESS_PENALTY_DELTA.toString()] = 6;
PENALTIES[LONG_MORE_PENALTY_DELTA.toString()] = 6;
PENALTIES[SHORT_MORE_PENALTY_DELTA.toString()] = 3;

var VALUE_FORMAT_LENGTH = {
    numeric: 1,
    "2-digit": 2,
    short: 3,
    long: 4,
    narrow: 5
};

var TIME_SPECIFIERS_REGEX = /[hHmsSzZoOvVxX]/;

function getHourSpecifier(options) {
    return options.hour12 ? "h" : "H";
}

var DATE_OPTIONS_MAP = [ {
    key: "era",
    specifier: "G"
}, {
    key: "year",
    specifier: "y"
}, {
    key: "month",
    specifier: "M"
}, {
    key: "day",
    specifier: "d"
}, {
    key: "weekday",
    specifier: "E"
}, {
    key: "hour",
    getSpecifier: getHourSpecifier
}, {
    key: "minute",
    specifier: "m"
}, {
    key: "second",
    specifier: "s"
}, {
    key: "timeZoneName",
    specifier: "z"
} ];

var STAND_ALONE_SPECIFIERS = {
    e: 'c',
    E: 'c',
    M: 'L',
    Q: 'q'
};

var specifiersRegex = {};
var resolvedFormats = {};

function getSpecifierRegex(specifier) {
    if (!specifiersRegex[specifier]) {
        specifiersRegex[specifier] = new RegExp(specifier + "+");
    }
    return specifiersRegex[specifier];
}

function skeletonSpecifiers(skeleton) {
    var result = [];
    var current = skeleton.charAt(0);
    var specifier = current;
    for (var idx = 1; idx < skeleton.length; idx++) {
        var character = skeleton.charAt(idx);
        if (character === specifier) {
            current += character;
        } else {
            result.push(current);
            current = specifier = character;
        }
    }

    result.push(current);

    return result;
}

function findBestMatch(specifiers, availableFormats) {
    var specifiersLength = specifiers.length;
    var maxScore = -Number.MAX_VALUE;
    var bestMatches, result;
    for (var format in availableFormats) {
        var matches = [];
        var currentFormat = format.replace("v", "z");
        var score = 0;
        for (var idx = 0; idx < specifiersLength; idx++) {
            var specifier = specifiers[idx];
            var specifierRegex = getSpecifierRegex(specifier[0]);
            var match = (specifierRegex.exec(currentFormat) || [])[0];

            if (!match) {
                score -= REMOVAL_PENALTY;
            } else {
                currentFormat = currentFormat.replace(match, EMPTY);
                if (match.length !== specifier.length) {
                    var delta = Math.max(Math.min(LENGHT_DELTA[match.length] - LENGHT_DELTA[specifier.length], 2), -2);
                    score -= PENALTIES[delta];
                }
            }

            matches.push(match);

            if (score < maxScore) {
                break;
            }
        }

        if (currentFormat.length) {
            score -= skeletonSpecifiers(currentFormat).length * ADDITION_PENALTY;
        }

        if (score > maxScore) {
            maxScore = score;
            bestMatches = matches;
            result = availableFormats[format];
        }
    }

    result = result.replace("v", "z");

    for (var idx$1 = 0; idx$1 < specifiersLength; idx$1++) {
        var bestMatch = bestMatches[idx$1];
        if (bestMatch && bestMatch !== specifiers[idx$1]) {
            var matchSpecifier = bestMatches[idx$1][0];
            result = result.replace(getSpecifierRegex(matchSpecifier), specifiers[idx$1]);
            if (STAND_ALONE_SPECIFIERS[matchSpecifier]) {
                result = result.replace(getSpecifierRegex(STAND_ALONE_SPECIFIERS[matchSpecifier]), specifiers[idx$1]);
            }
        }
    }

    return result;
}

function cacheFormat(skeleton, format, locale) {
    if (!resolvedFormats[locale]) {
        resolvedFormats[locale] = {};
    }
    resolvedFormats[locale][skeleton] = format;
}


function skeletonFormat(skeleton, info) {
    var availableFormats = info.calendar.dateTimeFormats.availableFormats;
    if (availableFormats[skeleton]) {
        return availableFormats[skeleton];
    }
    if (resolvedFormats[info.name] && resolvedFormats[info.name][skeleton]) {
        return resolvedFormats[info.name][skeleton];
    }
    var timeStartIndex = skeleton.search(TIME_SPECIFIERS_REGEX);
    var result;
    if (timeStartIndex > 0) {
        var dateSkeleton = skeleton.substr(0, timeStartIndex);
        var timeSkeleton = skeleton.substr(timeStartIndex);

        result = formatString(info.calendar.dateTimeFormats.short, //should be deterimed based on specifiers
            availableFormats[timeSkeleton] || findBestMatch(skeletonSpecifiers(timeSkeleton), availableFormats),
            availableFormats[dateSkeleton] || findBestMatch(skeletonSpecifiers(dateSkeleton), availableFormats));
    } else {
        result = findBestMatch(skeletonSpecifiers(skeleton), availableFormats);
    }

    cacheFormat(skeleton, result, info.name);
    return result;
}

function skeletonFromOptions(options) {
    var result = [];
    for (var idx = 0; idx < DATE_OPTIONS_MAP.length; idx++) {
        var option = DATE_OPTIONS_MAP[idx];
        var field = option.key;
        var value = options[field];
        if (value) {
            var spcifier = option.specifier || option.getSpecifier(options);
            result.push(spcifier.repeat(VALUE_FORMAT_LENGTH[value]));
        }
    }

    return result.join(EMPTY);
}

function datePattern(format, info) {
    var calendar = info.calendar;
    var result;
    if (isString(format)) {
        if (calendar.patterns[format]) {
            result = calendar.patterns[format];
        } else {
            result = format;
        }
    } else if (format) {
        if (format.pattern) {
            return format.pattern;
        }

        var skeleton = format.skeleton;
        if (!skeleton) {
            if (format.datetime) {
                result = formatString(calendar.dateTimeFormats[format.datetime], calendar.timeFormats[format.datetime], calendar.dateFormats[format.datetime]);
            } else if (format.date) {
                result = calendar.dateFormats[format.date];
            } else if (format.time) {
                result = calendar.timeFormats[format.time];
            } else {
                skeleton = skeletonFromOptions(format);
            }
        }

        if (skeleton) {
            result = skeletonFormat(skeleton, info);
        }
    }

    if (!result) {
        result = calendar.patterns.d;
    }

    return result;
}

function dateNameType(formatLength) {
    var nameType;
    if (formatLength <= 3) {
        nameType = "abbreviated";
    } else if (formatLength === 4) {
        nameType = "wide";
    } else if (formatLength === 5) {
        nameType = "narrow";
    } else if (formatLength === 6) {
        nameType = "short";
    }

    return nameType;
}

function formatNames(locale, type, formatLength, standAlone, lower) {
    return dateFormatNames(locale, {
        type: type,
        nameType: dateNameType(formatLength),
        standAlone: standAlone,
        lower: lower
    });
}

function isFunction(fun) {
    return typeof(fun) === 'function';
}

function isDate(value) {
    return Boolean(value) && isFunction(value.getTime) && isFunction(value.getMonth);
}

var MONTH = 'month';
var HOUR = 'hour';
var ZONE = 'zone';
var WEEKDAY = 'weekday';
var QUARTER = 'quarter';

var DATE_FIELD_MAP = {
    'G': 'era',
    'y': 'year',
    'q': QUARTER,
    'Q': QUARTER,
    'M': MONTH,
    'L': MONTH,
    'd': 'day',
    'E': WEEKDAY,
    'c': WEEKDAY,
    'e': WEEKDAY,
    'h': HOUR,
    'H': HOUR,
    'k': HOUR,
    'K': HOUR,
    'm': 'minute',
    's': 'second',
    'a': 'dayperiod',
    'x': ZONE,
    'X': ZONE,
    'z': ZONE,
    'Z': ZONE
};

var dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

function formatDayOfWeekIndex(day, formatLength, localeInfo$$1) {
    var firstDayIndex = firstDay(localeInfo$$1);
    var dayIndex;
    if (day < firstDayIndex) {
        dayIndex = 7 - firstDayIndex + day;
    } else {
        dayIndex = day - firstDayIndex;
    }

    return dayIndex + 1;
}

function formatMonth(month, formatLength, info, standAlone) {
    if (formatLength <= 2) {
        return pad(month + 1, formatLength);
    }
    return formatNames(info, "months", formatLength, standAlone)[month];
}

function formatQuarter(date, formatLength, info, standAlone) {
    var quarter = Math.floor(date.getMonth() / 3);
    if (formatLength < 3) {
        return quarter + 1;
    }

    return formatNames(info, "quarters", formatLength, standAlone)[quarter];
}


function formatTimeZone(date, info, options) {
    var shortHours = options.shortHours;
    var optionalMinutes = options.optionalMinutes;
    var separator = options.separator;
    var localizedName = options.localizedName;
    var zZeroOffset = options.zZeroOffset;
    var offset = date.getTimezoneOffset() / 60;
    if (offset === 0 && zZeroOffset) {
        return "Z";
    }
    var sign = offset <= 0 ? "+" : "-";
    var hoursMinutes = Math.abs(offset).toString().split(".");
    var minutes = hoursMinutes[1] || 0;
    var result = sign + (shortHours ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
    if (minutes || !optionalMinutes) {
        result += (separator ? ":" : EMPTY) + pad(minutes, 2);
    }

    if (localizedName) {
        var localizedFormat = offset === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat;
        result = formatString(localizedFormat, result);
    }

    return result;
}

function formatDayOfWeek(date, formatLength, info, standAlone) {
    var result;
    if (formatLength < 3) {
        result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
    } else {
        result = formatNames(info, "days", formatLength, standAlone)[date.getDay()];
    }
    return result;
}

var formatters = {};

formatters.d = function(date, formatLength) {
    return pad(date.getDate(), formatLength);
};

formatters.E = function(date, formatLength, info) {
    return formatNames(info, "days", formatLength)[date.getDay()];
};

formatters.M = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, false);
};

formatters.L = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, true);
};

formatters.y = function(date, formatLength) {
    var year = date.getFullYear();
    if (formatLength === 2) {
        year = year % 100;
    }
    return pad(year, formatLength);
};

formatters.h = function(date, formatLength) {
    var hours = date.getHours() % 12 || 12;
    return pad(hours, formatLength);
};

formatters.H = function(date, formatLength) {
    return pad(date.getHours(), formatLength);
};

formatters.k = function(date, formatLength) {
    return pad(date.getHours() || 24, formatLength);
};

formatters.K = function(date, formatLength) {
    return pad(date.getHours() % 12, formatLength);
};

formatters.m = function(date, formatLength) {
    return pad(date.getMinutes(), formatLength);
};

formatters.s = function(date, formatLength) {
    return pad(date.getSeconds(), formatLength);
};

formatters.S = function(date, formatLength) {
    var milliseconds = date.getMilliseconds();
    var result;
    if (milliseconds !== 0) {
        result = String(date.getMilliseconds() / 1000).split(".")[1].substr(0, formatLength);
    } else {
        result = pad(EMPTY, formatLength);
    }
    return result;
};

formatters.a = function(date, formatLength, info) {
    return formatNames(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
};

formatters.z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        shortHours: formatLength < 4,
        optionalMinutes: formatLength < 4,
        separator: true,
        localizedName: true
    });
};

formatters.Z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        separator: formatLength > 3,
        localizedName: formatLength === 4,
        zZeroOffset: formatLength === 5
    });
};

formatters.x = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5
    });
};

formatters.X = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5,
        zZeroOffset: true
    });
};

formatters.G = function(date, formatLength, info) {
    var era = date.getFullYear() >= 0 ? 1 : 0;
    return formatNames(info, "eras", formatLength)[era];
};

formatters.e = formatDayOfWeek;

formatters.c = function(date, formatLength, info) {
    return formatDayOfWeek(date, formatLength, info, true);
};

formatters.q = function(date, formatLength, info) {
    return formatQuarter(date, formatLength, info, true);
};

formatters.Q = formatQuarter;

function formatDate(date, format, locale) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    if (!isDate(date)) {
        if (date === undefined || date === null) {
            return EMPTY;
        }
        return date;
    }

    var info = localeInfo(locale);
    var pattern = datePattern(format, info);

    return pattern.replace(dateFormatRegExp, function(match) {
        var formatLength = match.length;
        var result;

        if (match.includes("'") || match.includes("\"")) {
            result = match.slice(1, formatLength - 1);
        } else {
            result = formatters[match[0]](date, formatLength, info);
        }

        return result;
    });
}

function convertTimeZone(date, fromOffset, toOffset) {
    var fromLocalOffset = date.getTimezoneOffset();

    var offsetDate = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

    var toLocalOffset = offsetDate.getTimezoneOffset();

    return new Date(offsetDate.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
}

function adjustDST(date, hours) {
    if (!hours && date.getHours() === 23) {
        date.setHours(date.getHours() + 2);
    }
}

var timeZoneOffsetRegExp = /([+|\-]\d{1,2})(:?)(\d{2})?/;
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var offsetRegExp = /[+-]\d*/;
var numberRegExp = {
    2: /^\d{1,2}/,
    3: /^\d{1,3}/,
    4: /^\d{4}/
};
var numberRegex = /\d+/;
var PLACEHOLDER$1 = "{0}";

var standardDateFormats = [
    "yyyy/MM/dd HH:mm:ss",
    "yyyy/MM/dd HH:mm",
    "yyyy/MM/dd",
    "E MMM dd yyyy HH:mm:ss",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
    "yyyy-MM-ddTHH:mm:ss.SSSXXX",
    "yyyy-MM-ddTHH:mm:ss.SSXXX",
    "yyyy-MM-ddTHH:mm:ssXXX",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
    "yyyy-MM-ddTHH:mm:ss.SSS",
    "yyyy-MM-ddTHH:mmXXX",
    "yyyy-MM-ddTHH:mmX",
    "yyyy-MM-ddTHH:mm:ss",
    "yyyy-MM-ddTHH:mm",
    "yyyy-MM-dd HH:mm:ss",
    "yyyy-MM-dd HH:mm",
    "yyyy-MM-dd",
    "HH:mm:ss",
    "HH:mm"
];
var FORMATS_SEQUENCE = [ "G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t" ];
var TWO_DIGIT_YEAR_MAX = 2029;

function outOfRange(value, start, end) {
    return !(value >= start && value <= end);
}

function lookAhead(match, state) {
    var format = state.format;
    var idx = state.idx;
    var i = 0;
    while (format[idx] === match) {
        i++;
        idx++;
    }
    if (i > 0) {
        idx -= 1;
    }
    state.idx = idx;
    return i;
}

function getNumber(size, state) {
    var regex = size ? (numberRegExp[size] || new RegExp('^\\d{1,' + size + '}')) : numberRegex,
        match = state.value.substr(state.valueIdx, size).match(regex);

    if (match) {
        match = match[0];
        state.valueIdx += match.length;
        return parseInt(match, 10);
    }
    return null;
}

function getIndexByName(names, state, lower) {
    var i = 0,
        length = names.length,
        name, nameLength,
        matchLength = 0,
        matchIdx = 0,
        subValue;

    for (; i < length; i++) {
        name = names[i];
        nameLength = name.length;
        subValue = state.value.substr(state.valueIdx, nameLength);

        if (lower) {
            subValue = subValue.toLowerCase();
        }

        if (subValue === name && nameLength > matchLength) {
            matchLength = nameLength;
            matchIdx = i;
        }
    }

    if (matchLength) {
        state.valueIdx += matchLength;
        return matchIdx + 1;
    }

    return null;
}

function checkLiteral(state) {
    var result = false;
    if (state.value.charAt(state.valueIdx) === state.format[state.idx]) {
        state.valueIdx++;
        result = true;
    }
    return result;
}

function calendarGmtFormats(calendar) {
    var gmtFormat = calendar.gmtFormat;
    var gmtZeroFormat = calendar.gmtZeroFormat;
    if (!gmtFormat) {
        throw errors.NoGMTInfo.error();
    }

    return [ gmtFormat.replace(PLACEHOLDER$1, EMPTY).toLowerCase(), gmtZeroFormat.replace(PLACEHOLDER$1, EMPTY).toLowerCase() ];
}

function parseTimeZoneOffset(state, info, options) {
    var shortHours = options.shortHours;
    var noSeparator = options.noSeparator;
    var optionalMinutes = options.optionalMinutes;
    var localizedName = options.localizedName;
    var zLiteral = options.zLiteral;
    state.UTC = true;

    if (zLiteral && state.value.charAt(state.valueIdx) === "Z") {
        state.valueIdx++;
        return false;
    }

    if (localizedName && !getIndexByName(calendarGmtFormats(info.calendar), state, true)) {
        return true;
    }

    var matches = timeZoneOffsetRegExp.exec(state.value.substr(state.valueIdx, 6));
    if (!matches) {
        return !localizedName;
    }

    var hoursMatch = matches[1];
    var minutesMatch = matches[3];
    var hoursOffset = parseInt(hoursMatch, 10);
    var separator = matches[2];
    var minutesOffset = parseInt(minutesMatch, 10);

    if (isNaN(hoursOffset) || (!shortHours && hoursMatch.length !== 3) || (!optionalMinutes && isNaN(minutesOffset)) || (noSeparator && separator)) {
        return true;
    }

    if (isNaN(minutesOffset)) {
        minutesOffset = null;
    }

    if (outOfRange(hoursOffset, -12, 13) || (minutesOffset && outOfRange(minutesOffset, 0, 59))) {
        return true;
    }

    state.valueIdx += matches[0].length;
    state.hoursOffset = hoursOffset;
    state.minutesOffset = minutesOffset;
}

function parseMonth(ch, state, info) {
    var count = lookAhead(ch, state);
    var names = formatNames(info, "months", count, ch === "L", true);

    var month = count < 3 ? getNumber(2, state) : getIndexByName(names, state, true);

    if (month === null || outOfRange(month, 1, 12)) {
        return true;
    }
    state.month = month - 1;
}

function parseDayOfWeek(ch, state, info) {
    var count = lookAhead(ch, state);
    var names = formatNames(info, "days", count, ch === "c", true);
    var dayOfWeek = count < 3 ? getNumber(1, state) : getIndexByName(names, state, true);
    if ((!dayOfWeek && dayOfWeek !== 0) || outOfRange(dayOfWeek, 1, 7)) {
        return true;
    }
}

var parsers = {};

parsers.d = function(state) {
    lookAhead("d", state);
    var day = getNumber(2, state);

    if (day === null || outOfRange(day, 1, 31)) {
        return true;
    }

    if (state.day === null) {
        state.day = day;
    }
};

parsers.E = function(state, info) {
    var count = lookAhead("E", state);
    //validate if it matches the day?
    var dayOfWeek = getIndexByName(formatNames(info, "days", count, false, true), state, true);
    if (dayOfWeek === null) {
        return true;
    }
};

parsers.M = function(state, info) {
    return parseMonth("M", state, info);
};

parsers.L = function(state, info) {
    return parseMonth("L", state, info);
};

parsers.y = function(state) {
    var count = lookAhead("y", state);
    var year = getNumber(count === 1 ? undefined : count, state);

    if (year === null) {
        return true;
    }

    if (count === 2) {
        var currentYear = new Date().getFullYear();
        year = (currentYear - currentYear % 100) + year;
        if (year > TWO_DIGIT_YEAR_MAX) {
            year -= 100;
        }
    }

    state.year = year;
};

parsers.h = function(state) {
    lookAhead("h", state);

    var hours = getNumber(2, state);
    if (hours === 12) {
        hours = 0;
    }

    if (hours === null || outOfRange(hours, 0, 11)) {
        return true;
    }

    state.hours = hours;
};

parsers.K = function(state) {
    lookAhead("K", state);

    var hours = getNumber(2, state);

    if (hours === null || outOfRange(hours, 0, 11)) {
        return true;
    }

    state.hours = hours;
};

parsers.a = function(state, info) {
    var count = lookAhead("a", state);
    var periodFormats = formatNames(info, "dayPeriods", count, false, true);

    var pmHour = getIndexByName([ periodFormats.pm ], state, true);
    if (!pmHour && !getIndexByName([ periodFormats.am ], state, true)) {
        return true;
    }

    state.pmHour = pmHour;
};

parsers.H = function(state) {
    lookAhead("H", state);
    var hours = getNumber(2, state);
    if (hours === null || outOfRange(hours, 0, 23)) {
        return true;
    }
    state.hours = hours;
};

parsers.k = function(state) {
    lookAhead("k", state);

    var hours = getNumber(2, state);

    if (hours === null || outOfRange(hours, 1, 24)) {
        return true;
    }

    state.hours = hours === 24 ? 0 : hours;
};

parsers.m = function(state) {
    lookAhead("m", state);
    var minutes = getNumber(2, state);

    if (minutes === null || outOfRange(minutes, 0, 59)) {
        return true;
    }

    state.minutes = minutes;
};

parsers.s = function(state) {
    lookAhead("s", state);
    var seconds = getNumber(2, state);
    if (seconds === null || outOfRange(seconds, 0, 59)) {
        return true;
    }
    state.seconds = seconds;
};

parsers.S = function(state) {
    var count = lookAhead("S", state);
    var match = state.value.substr(state.valueIdx, count);
    var milliseconds = null;

    if (!isNaN(parseInt(match, 10))) {
        milliseconds = parseFloat("0." + match, 10);
        milliseconds = round(milliseconds, 3);
        milliseconds *= 1000;
        state.valueIdx += count;
    }

    if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
        return true;
    }

    state.milliseconds = milliseconds;
};

parsers.z = function(state, info) {
    var count = lookAhead("z", state);

    var shortFormat = count < 4;

    var invalid = parseTimeZoneOffset(state, info, {
        shortHours: shortFormat,
        optionalMinutes: shortFormat,
        localizedName: true
    });

    if (invalid) {
        return invalid;
    }
};

parsers.Z = function(state, info) {
    var count = lookAhead("Z", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count < 4,
        zLiteral: count === 5,
        localizedName: count === 4
    });

    if (invalid) {
        return invalid;
    }
};

parsers.x = function(state, info) {
    var count = lookAhead("x", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count !== 3 && count !== 5,
        optionalMinutes: count === 1
    });
    if (invalid) {
        return invalid;
    }
};

parsers.X = function(state, info) {
    var count = lookAhead("X", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count !== 3 && count !== 5,
        optionalMinutes: count === 1,
        zLiteral: true
    });
    if (invalid) {
        return invalid;
    }
};

parsers.G = function(state, info) {
    var count = lookAhead("G", state);
    var eras = formatNames(info, "eras", count, false, true);
    var era = getIndexByName([ eras[0], eras[1] ], state, true);

    if (era === null) {
        return true;
    }
};

parsers.e = function(state, info) {
    return parseDayOfWeek("e", state, info);
};

parsers.c = function(state, info) {
    return parseDayOfWeek("c", state, info);
};

function createDate(state) {
    var year = state.year;
    var month = state.month;
    var day = state.day;
    var hours = state.hours;
    var minutes = state.minutes;
    var seconds = state.seconds;
    var milliseconds = state.milliseconds;
    var pmHour = state.pmHour;
    var UTC = state.UTC;
    var hoursOffset = state.hoursOffset;
    var minutesOffset = state.minutesOffset;
    var hasTime = hours !== null || minutes !== null || seconds || null;
    var date = new Date();
    var result;

    if (year === null && month === null && day === null && hasTime) {
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
    } else {
        if (year === null) {
            year = date.getFullYear();
        }

        if (day === null) {
            day = 1;
        }
    }

    if (pmHour && hours < 12) {
        hours += 12;
    }

    if (UTC) {
        if (hoursOffset) {
            hours += -hoursOffset;
        }

        if (minutesOffset) {
            minutes += -minutesOffset * (hoursOffset < 0 ? -1 : 1);
        }

        result = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
    } else {
        result = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        adjustDST(result, hours);
    }

    if (year < 100) {
        result.setFullYear(year);
    }

    if (result.getDate() !== day && UTC === undefined) {
        return null;
    }

    return result;
}

function parseExact(value, format, info) {
    var pattern = datePattern(format, info).split(EMPTY);

    var state = {
        format: pattern,
        idx: 0,
        value: value,
        valueIdx: 0,
        year: null,
        month: null,
        day: null,
        hours: null,
        minutes: null,
        seconds: null,
        milliseconds: null
    };
    var length = pattern.length;
    var literal = false;

    for (; state.idx < length; state.idx++) {
        var ch = pattern[state.idx];

        if (literal) {
            if (ch === "'") {
                literal = false;
            }

            checkLiteral(state);
        } else {
            if (parsers[ch]) {
                var invalid = parsers[ch](state, info);
                if (invalid) {
                    return null;
                }
            } else if (ch === "'") {
                literal = true;
                checkLiteral(state);
            } else if (!checkLiteral(state)) {
                return null;
            }
        }
    }

    if (state.valueIdx < value.length) {
        return null;
    }

    return createDate(state) || null;
}

function parseMicrosoftDateOffset(offset) {
    var sign = offset.substr(0, 1) === "-" ? -1 : 1;

    var result = offset.substring(1);
    result = (parseInt(result.substr(0, 2), 10) * 60) + parseInt(result.substring(2), 10);

    return sign * result;
}

function parseMicrosoftDateFormat(value) {
    if (value && value.indexOf("/D") === 0) {
        var date = dateRegExp.exec(value);
        if (date) {
            date = date[1];
            var tzoffset = offsetRegExp.exec(date.substring(1));

            date = new Date(parseInt(date, 10));

            if (tzoffset) {
                tzoffset = parseMicrosoftDateOffset(tzoffset[0]);
                date = convertTimeZone(date, date.getTimezoneOffset(), 0);
                date = convertTimeZone(date, 0, -1 * tzoffset);
            }

            return date;
        }
    }
}

function defaultFormats(calendar) {
    var formats = [];
    var patterns = calendar.patterns;
    var length = FORMATS_SEQUENCE.length;

    for (var idx = 0; idx < length; idx++) {
        formats.push(patterns[FORMATS_SEQUENCE[idx]]);
    }

    return formats.concat(standardDateFormats);
}

function parseDate(value, formats, locale) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    if (!value) {
        return null;
    }

    if (isDate(value)) {
        return value;
    }

    var parseValue = String(value).trim();
    var date = parseMicrosoftDateFormat(parseValue);
    if (date) {
        return date;
    }

    var info = localeInfo(locale);
    var parseFormats = formats || defaultFormats(info.calendar);
    parseFormats = Array.isArray(parseFormats) ? parseFormats : [ parseFormats ];

    var length = parseFormats.length;

    for (var idx = 0; idx < length; idx++) {
        date = parseExact(parseValue, parseFormats[idx], info);
        if (date) {
            return date;
        }
    }

    return date;
}

var NAME_TYPES = {
    month: {
        type: 'months',
        minLength: 3,
        standAlone: 'L'
    },

    quarter: {
        type: 'quarters',
        minLength: 3,
        standAlone: 'q'
    },

    weekday: {
        type: 'days',
        minLength: {
            E: 0,
            c: 3,
            e: 3
        },
        standAlone: 'c'
    },

    dayperiod: {
        type: 'dayPeriods',
        minLength: 0
    },

    era: {
        type: 'eras',
        minLength: 0
    }
};

var LITERAL = 'literal';

function addLiteral(parts, value) {
    var lastPart = parts[parts.length - 1];
    if (lastPart && lastPart.type === LITERAL) {
        lastPart.pattern += value;
    } else {
        parts.push({
            type: LITERAL,
            pattern: value
        });
    }
}

function isHour12(pattern) {
    return pattern === 'h' || pattern === 'K';
}

function splitDateFormat(format, locale) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    var info = localeInfo(locale);
    var pattern = datePattern(format, info);
    var parts = [];
    var lastIndex = dateFormatRegExp.lastIndex = 0;
    var match = dateFormatRegExp.exec(pattern);

    while (match) {
        var value = match[0];

        if (lastIndex < match.index) {
            addLiteral(parts, pattern.substring(lastIndex, match.index));
        }

        if (value.startsWith('"') || value.startsWith("'")) {
            addLiteral(parts, value);
        } else {
            var specifier = value[0];
            var type = DATE_FIELD_MAP[specifier];
            var part = {
                type: type,
                pattern: value
            };

            if (type === 'hour') {
                part.hour12 = isHour12(value);
            }

            var names = NAME_TYPES[type];

            if (names) {
                var minLength = isNumber(names.minLength) ? names.minLength : names.minLength[specifier];
                var patternLength = value.length;

                if (patternLength >= minLength) {
                    part.names = {
                        type: names.type,
                        nameType: dateNameType(patternLength),
                        standAlone: names.standAlone === specifier
                    };
                }
            }

            parts.push(part);
        }

        lastIndex = dateFormatRegExp.lastIndex;
        match = dateFormatRegExp.exec(pattern);
    }

    if (lastIndex < pattern.length) {
        addLiteral(parts, pattern.substring(lastIndex));
    }

    return parts;
}

var formatRegExp$2 = /\{(\d+)(:[^\}]+)?\}/g;

function toString(value, format, locale) {
    if (format) {
        if (isDate(value)) {
            return formatDate(value, format, locale);
        } else if (isNumber(value)) {
            return formatNumber(value, format, locale);
        }
    }

    return value !== undefined && value !== null ? value : EMPTY;
}

function format(format, values, locale) {
    return format.replace(formatRegExp$2, function(match, index, placeholderFormat) {
        var value = values[parseInt(index, 10)];

        return toString(value, placeholderFormat ? placeholderFormat.substring(1) : EMPTY, locale);
    });
}

exports.formatNumber = formatNumber;
exports.parseNumber = parseNumber;
exports.formatDate = formatDate;
exports.parseDate = parseDate;
exports.splitDateFormat = splitDateFormat;
exports.load = load;
exports.setData = setData;
exports.dateFieldName = dateFieldName;
exports.dateFormatNames = dateFormatNames;
exports.cldr = cldr;
exports.localeInfo = localeInfo;
exports.currencyDisplays = currencyDisplays;
exports.currencyDisplay = currencyDisplay;
exports.currencyFractionOptions = currencyFractionOptions;
exports.territoryCurrencyCode = territoryCurrencyCode;
exports.localeCurrency = localeCurrency;
exports.firstDay = firstDay;
exports.weekendRange = weekendRange;
exports.numberSymbols = numberSymbols;
exports.toString = toString;
exports.format = format;
exports.errors = errors;
exports.IntlError = IntlError;
exports.toIntlErrors = toIntlErrors;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2NsZHIvZGVmYXVsdC1kYXRhLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvY29tbW9uL2lzLXN0cmluZy5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2Vycm9yLWRldGFpbHMuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9lcnJvcnMuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9jbGRyL2luZm8uanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9jb21tb24vY29uc3RhbnRzLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvY2xkci9sb2FkLW51bWJlcnMuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9jbGRyL2xvYWQtZGF0ZXMuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9jbGRyL3RlcnJpdG9yeS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2NsZHIvbG9hZC5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2NsZHIvc2V0LWRhdGEuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9jbGRyL2RhdGUtZmllbGQtbmFtZS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2NsZHIvZGF0ZS1mb3JtYXQtbmFtZXMuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9jbGRyL3BhcnNlLXJhbmdlLWRhdGUuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9jbGRyL2N1cnJlbmN5LmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvY2xkci9jb25zdGFudHMuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9jbGRyL2ZpcnN0LWRheS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2NsZHIvd2Vla2VuZC1yYW5nZS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2NsZHIvbnVtYmVyLXN5bWJvbHMuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9udW1iZXJzL2Zvcm1hdC1jdXJyZW5jeS1zeW1ib2wuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9udW1iZXJzL2dyb3VwLWludGVnZXIuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9udW1iZXJzL2lzLWN1cnJlbmN5LXN0eWxlLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvY29tbW9uL3BhZC5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2NvbW1vbi9yb3VuZC5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL251bWJlcnMvc3RhbmRhcmQtbnVtYmVyLWZvcm1hdC5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL251bWJlcnMvY3VzdG9tLW51bWJlci1mb3JtYXQuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9udW1iZXJzL2Zvcm1hdC1vcHRpb25zLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvbnVtYmVycy9mb3JtYXQtbnVtYmVyLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvY29tbW9uL2lzLW51bWJlci5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL251bWJlcnMvcGFyc2UtbnVtYmVyLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvY29tbW9uL2Zvcm1hdC1zdHJpbmcuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9kYXRlcy9kYXRlLXBhdHRlcm4uanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9kYXRlcy9kYXRlLW5hbWUtdHlwZS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2RhdGVzL2Zvcm1hdC1uYW1lcy5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2NvbW1vbi9pcy1kYXRlLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvZGF0ZXMvY29uc3RhbnRzLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvZGF0ZXMvZm9ybWF0LWRhdGUuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnRsL3NyYy9kYXRlcy90aW1lLXV0aWxzLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvZGF0ZXMvcGFyc2UtZGF0ZS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWludGwvc3JjL2RhdGVzL3NwbGl0LWRhdGUtZm9ybWF0LmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW50bC9zcmMvZm9ybWF0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHREYXRhID0ge1xuICAgIGVuOiB7XG4gICAgICAgIG5hbWU6IFwiZW5cIixcbiAgICAgICAgaWRlbnRpdHk6IHtcbiAgICAgICAgICAgIHZlcnNpb246IHtcbiAgICAgICAgICAgICAgICBfbnVtYmVyOiBcIiRSZXZpc2lvbjogMTI0MTggJFwiLFxuICAgICAgICAgICAgICAgIF9jbGRyVmVyc2lvbjogXCIyOVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZW5cIlxuICAgICAgICB9LFxuICAgICAgICB0ZXJyaXRvcnk6IFwiVVNcIixcbiAgICAgICAgbnVtYmVyczoge1xuICAgICAgICAgICAgc3ltYm9sczoge1xuICAgICAgICAgICAgICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgICAgICAgICAgICAgIGdyb3VwOiBcIixcIixcbiAgICAgICAgICAgICAgICBsaXN0OiBcIjtcIixcbiAgICAgICAgICAgICAgICBwZXJjZW50U2lnbjogXCIlXCIsXG4gICAgICAgICAgICAgICAgcGx1c1NpZ246IFwiK1wiLFxuICAgICAgICAgICAgICAgIG1pbnVzU2lnbjogXCItXCIsXG4gICAgICAgICAgICAgICAgZXhwb25lbnRpYWw6IFwiRVwiLFxuICAgICAgICAgICAgICAgIHN1cGVyc2NyaXB0aW5nRXhwb25lbnQ6IFwiw5dcIixcbiAgICAgICAgICAgICAgICBwZXJNaWxsZTogXCLigLBcIixcbiAgICAgICAgICAgICAgICBpbmZpbml0eTogXCLiiJ5cIixcbiAgICAgICAgICAgICAgICBuYW46IFwiTmFOXCIsXG4gICAgICAgICAgICAgICAgdGltZVNlcGFyYXRvcjogXCI6XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWNpbWFsOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybnM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJuXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdyb3VwU2l6ZTogW1xuICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaWVudGlmaWM6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuczogW1xuICAgICAgICAgICAgICAgICAgICBcIm5FblwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBncm91cFNpemU6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGVyY2VudDoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm5zOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibiVcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ3JvdXBTaXplOiBbXG4gICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuczogW1xuICAgICAgICAgICAgICAgICAgICBcIiRuXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdyb3VwU2l6ZTogW1xuICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInVuaXRQYXR0ZXJuLWNvdW50LW9uZVwiOiBcIm4gJFwiLFxuICAgICAgICAgICAgICAgIFwidW5pdFBhdHRlcm4tY291bnQtb3RoZXJcIjogXCJuICRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbmNpZXM6IHtcbiAgICAgICAgICAgICAgICBCR046IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQnVsZ2FyaWFuIExldlwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlOYW1lLWNvdW50LW9uZVwiOiBcIkJ1bGdhcmlhbiBsZXZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5TmFtZS1jb3VudC1vdGhlclwiOiBcIkJ1bGdhcmlhbiBsZXZhXCIsXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbDogXCJCR05cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgRVVSOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkV1cm9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5TmFtZS1jb3VudC1vbmVcIjogXCJldXJvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheU5hbWUtY291bnQtb3RoZXJcIjogXCJldXJvc1wiLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IFwi4oKsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3ltYm9sLWFsdC1uYXJyb3dcIjogXCLigqxcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgVVNEOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlVTIERvbGxhclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlOYW1lLWNvdW50LW9uZVwiOiBcIlVTIGRvbGxhclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlOYW1lLWNvdW50LW90aGVyXCI6IFwiVVMgZG9sbGFyc1wiLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IFwiJFwiLFxuICAgICAgICAgICAgICAgICAgICBcInN5bWJvbC1hbHQtbmFycm93XCI6IFwiJFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvY2FsZUN1cnJlbmN5OiBcIlVTRFwiLFxuICAgICAgICAgICAgYWNjb3VudGluZzoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm5zOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiJG5cIixcbiAgICAgICAgICAgICAgICAgICAgXCIoJG4pXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdyb3VwU2l6ZTogW1xuICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYWxlbmRhcjoge1xuICAgICAgICAgICAgZ210Rm9ybWF0OiBcIkdNVHswfVwiLFxuICAgICAgICAgICAgZ210WmVyb0Zvcm1hdDogXCJHTVRcIixcbiAgICAgICAgICAgIHBhdHRlcm5zOiB7XG4gICAgICAgICAgICAgICAgZDogXCJNL2QveVwiLFxuICAgICAgICAgICAgICAgIEQ6IFwiRUVFRSwgTU1NTSBkLCB5XCIsXG4gICAgICAgICAgICAgICAgbTogXCJNTU0gZFwiLFxuICAgICAgICAgICAgICAgIE06IFwiTU1NTSBkXCIsXG4gICAgICAgICAgICAgICAgeTogXCJNTU0geVwiLFxuICAgICAgICAgICAgICAgIFk6IFwiTU1NTSB5XCIsXG4gICAgICAgICAgICAgICAgRjogXCJFRUVFLCBNTU1NIGQsIHkgaDptbTpzcyBhXCIsXG4gICAgICAgICAgICAgICAgZzogXCJNL2QveSBoOm1tIGFcIixcbiAgICAgICAgICAgICAgICBHOiBcIk0vZC95IGg6bW06c3MgYVwiLFxuICAgICAgICAgICAgICAgIHQ6IFwiaDptbSBhXCIsXG4gICAgICAgICAgICAgICAgVDogXCJoOm1tOnNzIGFcIixcbiAgICAgICAgICAgICAgICBzOiBcInl5eXknLSdNTSctJ2RkJ1QnSEgnOidtbSc6J3NzXCIsXG4gICAgICAgICAgICAgICAgdTogXCJ5eXl5Jy0nTU0nLSdkZCBISCc6J21tJzonc3MnWidcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGVUaW1lRm9ybWF0czoge1xuICAgICAgICAgICAgICAgIGZ1bGw6IFwiezF9ICdhdCcgezB9XCIsXG4gICAgICAgICAgICAgICAgbG9uZzogXCJ7MX0gJ2F0JyB7MH1cIixcbiAgICAgICAgICAgICAgICBtZWRpdW06IFwiezF9LCB7MH1cIixcbiAgICAgICAgICAgICAgICBzaG9ydDogXCJ7MX0sIHswfVwiLFxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZUZvcm1hdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgQmg6IFwiaCBCXCIsXG4gICAgICAgICAgICAgICAgICAgIEJobTogXCJoOm1tIEJcIixcbiAgICAgICAgICAgICAgICAgICAgQmhtczogXCJoOm1tOnNzIEJcIixcbiAgICAgICAgICAgICAgICAgICAgZDogXCJkXCIsXG4gICAgICAgICAgICAgICAgICAgIEU6IFwiY2NjXCIsXG4gICAgICAgICAgICAgICAgICAgIEVCaG06IFwiRSBoOm1tIEJcIixcbiAgICAgICAgICAgICAgICAgICAgRUJobXM6IFwiRSBoOm1tOnNzIEJcIixcbiAgICAgICAgICAgICAgICAgICAgRWQ6IFwiZCBFXCIsXG4gICAgICAgICAgICAgICAgICAgIEVobTogXCJFIGg6bW0gYVwiLFxuICAgICAgICAgICAgICAgICAgICBFSG06IFwiRSBISDptbVwiLFxuICAgICAgICAgICAgICAgICAgICBFaG1zOiBcIkUgaDptbTpzcyBhXCIsXG4gICAgICAgICAgICAgICAgICAgIEVIbXM6IFwiRSBISDptbTpzc1wiLFxuICAgICAgICAgICAgICAgICAgICBHeTogXCJ5IEdcIixcbiAgICAgICAgICAgICAgICAgICAgR3lNTU06IFwiTU1NIHkgR1wiLFxuICAgICAgICAgICAgICAgICAgICBHeU1NTWQ6IFwiTU1NIGQsIHkgR1wiLFxuICAgICAgICAgICAgICAgICAgICBHeU1NTUVkOiBcIkUsIE1NTSBkLCB5IEdcIixcbiAgICAgICAgICAgICAgICAgICAgaDogXCJoIGFcIixcbiAgICAgICAgICAgICAgICAgICAgSDogXCJISFwiLFxuICAgICAgICAgICAgICAgICAgICBobTogXCJoOm1tIGFcIixcbiAgICAgICAgICAgICAgICAgICAgSG06IFwiSEg6bW1cIixcbiAgICAgICAgICAgICAgICAgICAgaG1zOiBcImg6bW06c3MgYVwiLFxuICAgICAgICAgICAgICAgICAgICBIbXM6IFwiSEg6bW06c3NcIixcbiAgICAgICAgICAgICAgICAgICAgaG1zdjogXCJoOm1tOnNzIGEgdlwiLFxuICAgICAgICAgICAgICAgICAgICBIbXN2OiBcIkhIOm1tOnNzIHZcIixcbiAgICAgICAgICAgICAgICAgICAgaG12OiBcImg6bW0gYSB2XCIsXG4gICAgICAgICAgICAgICAgICAgIEhtdjogXCJISDptbSB2XCIsXG4gICAgICAgICAgICAgICAgICAgIE06IFwiTFwiLFxuICAgICAgICAgICAgICAgICAgICBNZDogXCJNL2RcIixcbiAgICAgICAgICAgICAgICAgICAgTUVkOiBcIkUsIE0vZFwiLFxuICAgICAgICAgICAgICAgICAgICBNTU06IFwiTExMXCIsXG4gICAgICAgICAgICAgICAgICAgIE1NTWQ6IFwiTU1NIGRcIixcbiAgICAgICAgICAgICAgICAgICAgTU1NRWQ6IFwiRSwgTU1NIGRcIixcbiAgICAgICAgICAgICAgICAgICAgTU1NTWQ6IFwiTU1NTSBkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTU1NTVctY291bnQtb25lXCI6IFwiJ3dlZWsnIFcgJ29mJyBNTU1NXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTU1NTVctY291bnQtb3RoZXJcIjogXCInd2VlaycgVyAnb2YnIE1NTU1cIixcbiAgICAgICAgICAgICAgICAgICAgbXM6IFwibW06c3NcIixcbiAgICAgICAgICAgICAgICAgICAgeTogXCJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHlNOiBcIk0veVwiLFxuICAgICAgICAgICAgICAgICAgICB5TWQ6IFwiTS9kL3lcIixcbiAgICAgICAgICAgICAgICAgICAgeU1FZDogXCJFLCBNL2QveVwiLFxuICAgICAgICAgICAgICAgICAgICB5TU1NOiBcIk1NTSB5XCIsXG4gICAgICAgICAgICAgICAgICAgIHlNTU1kOiBcIk1NTSBkLCB5XCIsXG4gICAgICAgICAgICAgICAgICAgIHlNTU1FZDogXCJFLCBNTU0gZCwgeVwiLFxuICAgICAgICAgICAgICAgICAgICB5TU1NTTogXCJNTU1NIHlcIixcbiAgICAgICAgICAgICAgICAgICAgeVFRUTogXCJRUVEgeVwiLFxuICAgICAgICAgICAgICAgICAgICB5UVFRUTogXCJRUVFRIHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5dy1jb3VudC1vbmVcIjogXCInd2VlaycgdyAnb2YnIFlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5dy1jb3VudC1vdGhlclwiOiBcIid3ZWVrJyB3ICdvZicgWVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWVGb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICAgICAgICAgICAgICAgIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgICAgICAgICAgICAgICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gICAgICAgICAgICAgICAgc2hvcnQ6IFwiaDptbSBhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0czoge1xuICAgICAgICAgICAgICAgIGZ1bGw6IFwiRUVFRSwgTU1NTSBkLCB5XCIsXG4gICAgICAgICAgICAgICAgbG9uZzogXCJNTU1NIGQsIHlcIixcbiAgICAgICAgICAgICAgICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgICAgICAgICAgICAgICBzaG9ydDogXCJNL2QveXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheXM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRodVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F0XCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTYVwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F0dXJkYXlcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN0YW5kLWFsb25lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRodVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F0XCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTYVwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F0dXJkYXlcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vbnRoczoge1xuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlZDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1hclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkp1blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNlcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTm92XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRlY1wiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRFwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEZWNlbWJlclwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic3RhbmQtYWxvbmVcIjoge1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlZDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1hclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkp1blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNlcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTm92XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRlY1wiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRFwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEZWNlbWJlclwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhcnRlcnM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTRcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNFwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMXN0IHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMm5kIHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiM3JkIHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNHRoIHF1YXJ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN0YW5kLWFsb25lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTRcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNFwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMXN0IHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMm5kIHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiM3JkIHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNHRoIHF1YXJ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheVBlcmlvZHM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbTogXCJBTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbS1hbHQtdmFyaWFudFwiOiBcImFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBub29uOiBcIm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBtOiBcIlBNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBtLWFsdC12YXJpYW50XCI6IFwicG1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcm5pbmcxOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcm5vb24xOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pbmcxOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWdodDE6IFwiYXQgbmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbTogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtLWFsdC12YXJpYW50XCI6IFwiYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vb246IFwiblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG06IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbS1hbHQtdmFyaWFudFwiOiBcInBtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JuaW5nMTogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJub29uMTogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVuaW5nMTogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmlnaHQxOiBcImF0IG5pZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtOiBcIkFNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtLWFsdC12YXJpYW50XCI6IFwiYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vb246IFwibm9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG06IFwiUE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG0tYWx0LXZhcmlhbnRcIjogXCJwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ybmluZzE6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVybm9vbjE6IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbmluZzE6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pZ2h0MTogXCJhdCBuaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic3RhbmQtYWxvbmVcIjoge1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtOiBcIkFNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtLWFsdC12YXJpYW50XCI6IFwiYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vb246IFwibm9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG06IFwiUE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG0tYWx0LXZhcmlhbnRcIjogXCJwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ybmluZzE6IFwibW9ybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJub29uMTogXCJhZnRlcm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pbmcxOiBcImV2ZW5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pZ2h0MTogXCJuaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtOiBcIkFNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtLWFsdC12YXJpYW50XCI6IFwiYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vb246IFwibm9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG06IFwiUE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG0tYWx0LXZhcmlhbnRcIjogXCJwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ybmluZzE6IFwibW9ybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJub29uMTogXCJhZnRlcm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pbmcxOiBcImV2ZW5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pZ2h0MTogXCJuaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbTogXCJBTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbS1hbHQtdmFyaWFudFwiOiBcImFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBub29uOiBcIm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBtOiBcIlBNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBtLWFsdC12YXJpYW50XCI6IFwicG1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcm5pbmcxOiBcIm1vcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVybm9vbjE6IFwiYWZ0ZXJub29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVuaW5nMTogXCJldmVuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWdodDE6IFwibmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyYXM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IFwiQmVmb3JlIENocmlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IFwiQW5ubyBEb21pbmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMC1hbHQtdmFyaWFudFwiOiBcIkJlZm9yZSBDb21tb24gRXJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEtYWx0LXZhcmlhbnRcIjogXCJDb21tb24gRXJhXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiBcIkJDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjFcIjogXCJBRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIwLWFsdC12YXJpYW50XCI6IFwiQkNFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEtYWx0LXZhcmlhbnRcIjogXCJDRVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IFwiQlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IFwiQVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIwLWFsdC12YXJpYW50XCI6IFwiQkNFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEtYWx0LXZhcmlhbnRcIjogXCJDRVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0ZUZpZWxkczoge1xuICAgICAgICAgICAgICAgIGVyYToge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcImVyYVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5ZWFyOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwieWVhclwiLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogXCJ5ci5cIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcInlyLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWFydGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwicXVhcnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogXCJxdHIuXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJxdHIuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vbnRoOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwibW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvcnQ6IFwibW8uXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJtby5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcIndlZWtcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvcnQ6IFwid2suXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJ3ay5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0OiBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IFwiZGF5XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkZTogXCJkYXkgb2YgdGhlIHdlZWtcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF5cGVyaW9kOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwiQU0vUE1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaG91cjoge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcImhvdXJcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvcnQ6IFwiaHIuXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJoci5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWludXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwibWludXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0OiBcIm1pbi5cIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcIm1pbi5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2Vjb25kOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwic2Vjb25kXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0OiBcInNlYy5cIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcInNlYy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgem9uZToge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcInRpbWUgem9uZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdXBwbGVtZW50YWw6IHtcbiAgICAgICAgbGlrZWx5U3VidGFnczoge1xuICAgICAgICAgICAgZW46IFwiZW4tTGF0bi1VU1wiXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5RGF0YToge1xuICAgICAgICAgICAgcmVnaW9uOiB7XG4gICAgICAgICAgICAgICAgVVM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgVVNEOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Zyb206IFwiMTc5Mi0wMS0wMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWtEYXRhOiB7XG4gICAgICAgICAgICBmaXJzdERheToge1xuICAgICAgICAgICAgICAgIFVTOiBcInN1blwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2Vla2VuZFN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgXCIwMDFcIjogXCJzYXRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdlZWtlbmRFbmQ6IHtcbiAgICAgICAgICAgICAgICBcIjAwMVwiOiBcInN1blwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdERhdGE7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xufSIsIi8vVGhlIGVycm9yIGlzIHJlcHJlc2VudGVkIGJ5IHVuaXF1ZSBuYW1lIGFuZCBjb3JyZXNwb25kaW5nIG1lc3NhZ2Vcbi8vVGhlIG1lc3NhZ2UgY2FuIGNvbnRhaW4gcGxhY2Vob2xkZXJzIHdpdGggaW5kZXgsIGUuZy4gezB9LCB7MX1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIFwiTm9Mb2NhbGVcIjogXCJNaXNzaW5nIGxvY2FsZSBpbmZvIGZvciAnezB9J1wiLFxuICAgIFwiTm9DdXJyZW5jeVwiOiBcIkNhbm5vdCBkZXRlcm1pbmUgY3VycmVuY3kgaW5mb3JtYXRpb24uIFBsZWFzZSBsb2FkIHRoZSBsb2NhbGUgY3VycmVuY2llcyBkYXRhLlwiLFxuICAgIFwiTm9TdXBwbGVtZW50YWxDdXJyZW5jeVwiOiBcIkNhbm5vdCBkZXRlcm1pbmUgY3VycmVuY3kuIFBsZWFzZSBsb2FkIHRoZSBzdXBwbGVtZW50YWwgY3VycmVuY3lEYXRhLlwiLFxuICAgIFwiTm9DdXJyZW5jeVJlZ2lvblwiOiBcIk5vIGN1cnJlbmN5IGRhdGEgZm9yIHJlZ2lvbiAnezB9J1wiLFxuICAgIFwiTm9DdXJyZW5jeURpc3BsYXlcIjogXCJDYW5ub3QgZGV0ZXJtaW5lIGN1cnJlbmN5IGRpc3BsYXkgaW5mb3JtYXRpb24uIFBsZWFzZSBsb2FkIHRoZSBsb2NhbGUgY3VycmVuY2llcyBkYXRhLiBUaGUgZGVmYXVsdCBjdWx0dXJlIGRvZXMgbm90IGluY2x1ZGUgdGhlIGFsbCBjdXJyZW5jaWVzIGRhdGEuXCIsXG4gICAgXCJOb0dNVEluZm9cIjogXCJDYW5ub3QgZGV0ZXJtaW5lIGxvY2FsZSBHTVQgZm9ybWF0LiBQbGVhc2UgbG9hZCB0aGUgbG9jYWxlIHRpbWVab25lTmFtZXMgZGF0YS5cIixcbiAgICBcIk5vV2Vla0RhdGFcIjogXCJDYW5ub3QgZGV0ZXJtaW5lIGxvY2FsZSBmaXJzdCBkYXkgb2Ygd2Vlay4gUGxlYXNlIGxvYWQgdGhlIHN1cHBsZW1lbnRhbCB3ZWVrRGF0YS5cIixcbiAgICBcIk5vRmlyc3REYXlcIjogXCJDYW5ub3QgZGV0ZXJtaW5lIGxvY2FsZSBmaXJzdCBkYXkgb2Ygd2Vlay4gUGxlYXNlIGxvYWQgdGhlIHN1cHBsZW1lbnRhbCB3ZWVrRGF0YS4gVGhlIGRlZmF1bHQgY3VsdHVyZSBpbmNsdWRlcyBvbmx5IHRoZSAnZW4tVVMnIGZpcnN0IGRheSBpbmZvLlwiLFxuICAgIFwiTm9WYWxpZEN1cnJlbmN5XCI6IFwiQ2Fubm90IGRldGVybWluZSBhIGRlZmF1bHQgY3VycmVuY3kgZm9yIHRoZSB7MH0gbG9jYWxlLiBQbGVhc2Ugc3BlY2lmeSBleHBsaWNpdGx5IHRoZSBjdXJyZW5jeSB3aXRoIHRoZSBmb3JtYXQgb3B0aW9ucy5cIixcbiAgICBcIk5vRGF0ZUZpZWxkTmFtZXNcIjogXCJDYW5ub3QgZGV0ZXJtaW5lIHRoZSBsb2NhbGUgZGF0ZSBmaWVsZCBuYW1lcy4gUGxlYXNlIGxvYWQgdGhlIGxvY2FsZSBkYXRlRmllbGRzIGRhdGEuXCJcbn07XG4iLCJpbXBvcnQgZXJyb3JEZXRhaWxzIGZyb20gJy4vZXJyb3ItZGV0YWlscyc7XG5cbmNvbnN0IGZvcm1hdFJlZ0V4cCA9IC9cXHsoXFxkKyl9P1xcfS9nO1xuXG5jbGFzcyBJbnRsRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSwgbWVzc2FnZSB9KSB7XG4gICAgICAgIGlmICghbmFtZSB8fCAhbWVzc2FnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwieyBuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyB9IG9iamVjdCBpcyByZXF1aXJlZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIGZvcm1hdE1lc3NhZ2UoLi4udmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGZsYXR0ZW5WYWx1ZXMgPSBmbGF0dGVuKHZhbHVlcyk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkTWVzc2FnZSA9IHRoaXMubWVzc2FnZS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24obWF0Y2gsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmxhdHRlblZhbHVlc1twYXJzZUludChpbmRleCwgMTApXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX06ICR7Zm9ybWF0dGVkTWVzc2FnZX1gO1xuICAgIH1cblxuICAgIGVycm9yKC4uLnZhbHVlcykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRoaXMuZm9ybWF0TWVzc2FnZSh2YWx1ZXMpKTtcbiAgICB9XG59XG5cbmNvbnN0IGZsYXR0ZW4gPSBmdW5jdGlvbihhcnIpIHtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYiksIFtdKTtcbn07XG5cbmNvbnN0IHRvSW50bEVycm9ycyA9IGZ1bmN0aW9uKGVycm9ycykge1xuICAgIGNvbnN0IHByZWRpY2F0ZSA9IGZ1bmN0aW9uKHByZXYsIG5hbWUpIHtcbiAgICAgICAgcHJldltuYW1lXSA9IG5ldyBJbnRsRXJyb3IoeyBuYW1lLCBtZXNzYWdlOiBlcnJvcnNbbmFtZV0gfSk7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5yZWR1Y2UocHJlZGljYXRlLCB7fSk7XG59O1xuXG5jb25zdCBlcnJvcnMgPSB0b0ludGxFcnJvcnMoZXJyb3JEZXRhaWxzKTtcblxuZXhwb3J0IHtcbiAgICBlcnJvcnMsXG4gICAgSW50bEVycm9yLFxuICAgIHRvSW50bEVycm9yc1xufTtcbiIsImltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHQtZGF0YSc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi4vY29tbW9uL2lzLXN0cmluZyc7XG5pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICcuLi9lcnJvcnMnO1xuXG5mdW5jdGlvbiBhdmFpbGFibGVMb2NhbGVJbmZvKGZ1bGxOYW1lLCBzdWZmaXhlcykge1xuICAgIGNvbnN0IHBhcnRzID0gZnVsbE5hbWUuc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gcGFydHNbMF07XG4gICAgY29uc3Qgc2NyaXB0ID0gcGFydHNbMV07XG4gICAgY29uc3QgdGVycml0b3J5ID0gcGFydHNbMl07XG5cbiAgICByZXR1cm4gY2xkcltmdWxsTmFtZV0gfHwgKHN1ZmZpeGVzLmluZGV4T2YodGVycml0b3J5KSAhPT0gLTEgJiYgY2xkcltsYW5ndWFnZSArIFwiLVwiICsgdGVycml0b3J5XSkgfHwgKHN1ZmZpeGVzLmluZGV4T2Yoc2NyaXB0KSAhPT0gLTEgJiYgY2xkcltsYW5ndWFnZSArIFwiLVwiICsgc2NyaXB0XSkgfHwgY2xkcltsYW5ndWFnZV07XG59XG5cbmZ1bmN0aW9uIGxvY2FsZUZ1bGxOYW1lKGxhbmd1YWdlLCBzdWZmaXhlcykge1xuICAgIGNvbnN0IGxpa2VseVN1YnRhZ3MgPSBjbGRyLnN1cHBsZW1lbnRhbC5saWtlbHlTdWJ0YWdzO1xuXG4gICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgc3VmZml4ZXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBsZXQgbmFtZSA9IGxpa2VseVN1YnRhZ3NbbGFuZ3VhZ2UgKyBcIi1cIiArIHN1ZmZpeGVzW2lkeCBdXTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxpa2VseVN1YnRhZ3NbbGFuZ3VhZ2VdKSB7XG4gICAgICAgIHJldHVybiBsaWtlbHlTdWJ0YWdzW2xhbmd1YWdlXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjbGRyID0gZGVmYXVsdERhdGE7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVJbmZvKGxvY2FsZSkge1xuICAgIGxldCBpbmZvO1xuICAgIGlmIChpc1N0cmluZyhsb2NhbGUpKSB7XG4gICAgICAgIGluZm8gPSBsb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyA9IGxvY2FsZTtcbiAgICB9XG4gICAgcmV0dXJuIGluZm87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVJbmZvKGxvY2FsZSkge1xuICAgIGlmIChjbGRyW2xvY2FsZV0pIHtcbiAgICAgICAgcmV0dXJuIGNsZHJbbG9jYWxlXTtcbiAgICB9XG5cbiAgICBjb25zdCBsaWtlbHlTdWJ0YWdzID0gY2xkci5zdXBwbGVtZW50YWwubGlrZWx5U3VidGFncztcbiAgICBpZiAobGlrZWx5U3VidGFncykge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGxvY2FsZS5zcGxpdChcIi1cIik7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gcGFydHNbMF07XG4gICAgICAgIGNvbnN0IHN1ZmZpeGVzID0gcGFydHMuc2xpY2UoMSk7XG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gbG9jYWxlRnVsbE5hbWUobGFuZ3VhZ2UsIHN1ZmZpeGVzKTtcbiAgICAgICAgY29uc3QgaW5mbyA9IGZ1bGxOYW1lID8gYXZhaWxhYmxlTG9jYWxlSW5mbyhmdWxsTmFtZSwgc3VmZml4ZXMpIDogbnVsbDtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3JzLk5vTG9jYWxlLmVycm9yKGxvY2FsZSk7XG59XG4iLCJleHBvcnQgY29uc3QgREVDSU1BTCA9IFwiZGVjaW1hbFwiO1xuZXhwb3J0IGNvbnN0IENVUlJFTkNZID0gXCJjdXJyZW5jeVwiO1xuZXhwb3J0IGNvbnN0IEFDQ09VTlRJTkcgPSBcImFjY291bnRpbmdcIjtcbmV4cG9ydCBjb25zdCBQRVJDRU5UID0gXCJwZXJjZW50XCI7XG5leHBvcnQgY29uc3QgU0NJRU5USUZJQyA9IFwic2NpZW50aWZpY1wiO1xuXG5leHBvcnQgY29uc3QgQ1VSUkVOQ1lfUExBQ0VIT0xERVIgPSBcIiRcIjtcbmV4cG9ydCBjb25zdCBQRVJDRU5UX1BMQUNFSE9MREVSID0gXCIlXCI7XG5leHBvcnQgY29uc3QgTlVNQkVSX1BMQUNFSE9MREVSID0gXCJuXCI7XG5cbmV4cG9ydCBjb25zdCBMSVNUX1NFUEFSQVRPUiA9IFwiO1wiO1xuZXhwb3J0IGNvbnN0IEdST1VQX1NFUEFSQVRPUiA9IFwiLFwiO1xuXG5leHBvcnQgY29uc3QgUE9JTlQgPSBcIi5cIjtcbmV4cG9ydCBjb25zdCBFTVBUWSA9IFwiXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPQ0FMRSA9IFwiZW5cIjtcblxuIiwiaW1wb3J0IHsgY2xkciB9IGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgeyBDVVJSRU5DWSwgQUNDT1VOVElORywgREVDSU1BTCwgQ1VSUkVOQ1lfUExBQ0VIT0xERVIsIE5VTUJFUl9QTEFDRUhPTERFUiwgTElTVF9TRVBBUkFUT1IsIEdST1VQX1NFUEFSQVRPUiwgUE9JTlQgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcblxuY29uc3QgTEFUSU5fTlVNQkVSX0ZPUk1BVFMgPSBcIkZvcm1hdHMtbnVtYmVyU3lzdGVtLWxhdG5cIjtcbmNvbnN0IExBVElOX05VTUJFUl9TWU1CT0xTID0gXCJzeW1ib2xzLW51bWJlclN5c3RlbS1sYXRuXCI7XG5cbmNvbnN0IHBhdHRlcm5SZWdFeHAgPSAvKFsjLDAuXSspL2c7XG5jb25zdCBjbGRyQ3VycmVuY3lSZWdFeHAgPSAvwqQvZztcblxuZnVuY3Rpb24gZ2V0UGF0dGVybnMocGF0dGVybikge1xuICAgIHBhdHRlcm5SZWdFeHAubGFzdEluZGV4ID0gMDtcblxuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UoY2xkckN1cnJlbmN5UmVnRXhwLCBDVVJSRU5DWV9QTEFDRUhPTERFUikucmVwbGFjZShwYXR0ZXJuUmVnRXhwLCBOVU1CRVJfUExBQ0VIT0xERVIpLnNwbGl0KExJU1RfU0VQQVJBVE9SKTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JvdXBTaXplKHBhdHRlcm4pIHtcbiAgICBwYXR0ZXJuUmVnRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgICBjb25zdCBudW1iZXJQYXR0ZXJucyA9IHBhdHRlcm5SZWdFeHAuZXhlYyhwYXR0ZXJuLnNwbGl0KExJU1RfU0VQQVJBVE9SKVswXSlbMF0uc3BsaXQoUE9JTlQpO1xuICAgIGNvbnN0IGludGVnZXIgPSBudW1iZXJQYXR0ZXJuc1swXTtcblxuICAgIGNvbnN0IGdyb3VwU2l6ZSA9IGludGVnZXIuc3BsaXQoR1JPVVBfU0VQQVJBVE9SKS5zbGljZSgxKS5tYXAoZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmxlbmd0aDtcbiAgICB9KS5yZXZlcnNlKCk7XG5cbiAgICByZXR1cm4gZ3JvdXBTaXplO1xufVxuXG5mdW5jdGlvbiBsb2FkQ3VycmVuY3lVbml0UGF0dGVybnMoY3VycmVuY3lJbmZvLCBjdXJyZW5jeUZvcm1hdHMpIHtcbiAgICBmb3IgKGxldCBmaWVsZCBpbiBjdXJyZW5jeUZvcm1hdHMpIHtcbiAgICAgICAgaWYgKGZpZWxkLnN0YXJ0c1dpdGgoXCJ1bml0UGF0dGVyblwiKSkge1xuICAgICAgICAgICAgY3VycmVuY3lJbmZvW2ZpZWxkXSA9IGN1cnJlbmN5Rm9ybWF0c1tmaWVsZF0ucmVwbGFjZShcInswfVwiLCBOVU1CRVJfUExBQ0VIT0xERVIpLnJlcGxhY2UoXCJ7MX1cIiwgQ1VSUkVOQ1lfUExBQ0VIT0xERVIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTnVtYmVyc0luZm8obG9jYWxlLCBpbmZvKSB7XG4gICAgY29uc3QgbG9jYWxlSW5mbyA9IGNsZHJbbG9jYWxlXTtcbiAgICBjb25zdCBudW1iZXJzID0gbG9jYWxlSW5mby5udW1iZXJzID0gbG9jYWxlSW5mby5udW1iZXJzIHx8IHt9O1xuICAgIG51bWJlcnMuc3ltYm9scyA9IG51bWJlcnMuc3ltYm9scyB8fCB7fTtcbiAgICBmb3IgKGxldCBmaWVsZCBpbiBpbmZvKSB7XG4gICAgICAgIGlmIChmaWVsZCA9PT0gTEFUSU5fTlVNQkVSX1NZTUJPTFMpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obnVtYmVycy5zeW1ib2xzLCBpbmZvW2ZpZWxkXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuaW5jbHVkZXMoTEFUSU5fTlVNQkVSX0ZPUk1BVFMpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGZpZWxkLnN1YnN0cigwLCBmaWVsZC5pbmRleE9mKExBVElOX05VTUJFUl9GT1JNQVRTKSk7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gaW5mb1tmaWVsZF0uc3RhbmRhcmQ7XG4gICAgICAgICAgICBudW1iZXJzW3N0eWxlXSA9IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuczogZ2V0UGF0dGVybnMocGF0dGVybilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc3R5bGUgPT09IENVUlJFTkNZKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyc1tzdHlsZV0uZ3JvdXBTaXplID0gZ2V0R3JvdXBTaXplKChpbmZvW0RFQ0lNQUwgKyBMQVRJTl9OVU1CRVJfRk9STUFUU10gfHwgaW5mb1tmaWVsZF0pLnN0YW5kYXJkKTtcbiAgICAgICAgICAgICAgICBsb2FkQ3VycmVuY3lVbml0UGF0dGVybnMobnVtYmVyc1tzdHlsZV0sIGluZm9bZmllbGRdKTtcbiAgICAgICAgICAgICAgICBudW1iZXJzW0FDQ09VTlRJTkddID0ge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuczogZ2V0UGF0dGVybnMoaW5mb1tmaWVsZF1bQUNDT1VOVElOR10pLFxuICAgICAgICAgICAgICAgICAgICBncm91cFNpemU6IG51bWJlcnNbc3R5bGVdLmdyb3VwU2l6ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG51bWJlcnNbc3R5bGVdLmdyb3VwU2l6ZSA9IGdldEdyb3VwU2l6ZShwYXR0ZXJuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJjdXJyZW5jaWVzXCIpIHtcbiAgICAgICAgICAgIG51bWJlcnMuY3VycmVuY2llcyA9IGluZm9bZmllbGRdO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGNsZHIgfSBmcm9tICcuL2luZm8nO1xuXG5jb25zdCBwcmVkZWZpbmVkRGF0ZVBhdHRlcm5zID0ge1xuICAgIHM6IFwieXl5eSctJ01NJy0nZGQnVCdISCc6J21tJzonc3NcIixcbiAgICB1OiBcInl5eXknLSdNTSctJ2RkIEhIJzonbW0nOidzcydaJ1wiXG59O1xuXG5jb25zdCBZRUFSX1JFR0VYID0gL3krL2c7XG5jb25zdCBTSE9SVF9EQVRFID0gWyBbIFwiZGF0ZUZvcm1hdHNcIiwgXCJzaG9ydFwiIF0gXTtcblxuY29uc3QgZGF0ZVBhdHRlcm5zID0ge1xuICAgIEQ6IFsgWyBcImRhdGVGb3JtYXRzXCIsIFwiZnVsbFwiIF0gXSxcbiAgICBtOiBbIFsgXCJkYXRlVGltZUZvcm1hdHNcIiwgXCJhdmFpbGFibGVGb3JtYXRzXCIsIFwiTU1NZFwiIF0gXSxcbiAgICBNOiBbIFsgXCJkYXRlVGltZUZvcm1hdHNcIiwgXCJhdmFpbGFibGVGb3JtYXRzXCIsIFwiTU1NTWRcIiBdIF0sXG4gICAgeTogWyBbIFwiZGF0ZVRpbWVGb3JtYXRzXCIsIFwiYXZhaWxhYmxlRm9ybWF0c1wiLCBcInlNTU1cIiBdIF0sXG4gICAgWTogWyBbIFwiZGF0ZVRpbWVGb3JtYXRzXCIsIFwiYXZhaWxhYmxlRm9ybWF0c1wiLCBcInlNTU1NXCIgXSBdLFxuICAgIEY6IFsgWyBcImRhdGVGb3JtYXRzXCIsIFwiZnVsbFwiIF0sIFsgXCJ0aW1lRm9ybWF0c1wiLCBcIm1lZGl1bVwiIF0gXSxcbiAgICBnOiBbIFsgXCJkYXRlVGltZUZvcm1hdHNcIiwgXCJhdmFpbGFibGVGb3JtYXRzXCIsIFwieU1kXCIgXSwgWyBcInRpbWVGb3JtYXRzXCIsIFwic2hvcnRcIiBdIF0sXG4gICAgRzogWyBbIFwiZGF0ZVRpbWVGb3JtYXRzXCIsIFwiYXZhaWxhYmxlRm9ybWF0c1wiLCBcInlNZFwiIF0sIFsgXCJ0aW1lRm9ybWF0c1wiLCBcIm1lZGl1bVwiIF0gXSxcbiAgICB0OiBbIFsgXCJ0aW1lRm9ybWF0c1wiLCBcInNob3J0XCIgXSBdLFxuICAgIFQ6IFsgWyBcInRpbWVGb3JtYXRzXCIsIFwibWVkaXVtXCIgXSBdXG59O1xuXG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG5hbWVzLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgbGV0IHZhbHVlID0gb2JqW25hbWVzW2lkeF1dO1xuICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldENhbGVuZGFyTmFtZXMoaW5mbywgaXNPYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBmb3JtYXRUeXBlIGluIGluZm8pIHtcbiAgICAgICAgbGV0IG5hbWVzID0gcmVzdWx0W2Zvcm1hdFR5cGVdID0ge307XG4gICAgICAgIGZvciAobGV0IGZvcm1hdCBpbiBpbmZvW2Zvcm1hdFR5cGVdKSB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0cyA9IGluZm9bZm9ybWF0VHlwZV1bZm9ybWF0XTtcbiAgICAgICAgICAgIG5hbWVzW2Zvcm1hdF0gPSBpc09iaiA/IGZvcm1hdHMgOiB0b0FycmF5KGZvcm1hdHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldEVyYU5hbWVzKGVyYXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBmb3JtYXQgPSByZXN1bHQuZm9ybWF0ID0ge307XG4gICAgY29uc3QgZXJhTmFtZU1hcCA9IHtcbiAgICAgICAgZXJhQWJicjogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICBlcmFOYW1lczogXCJ3aWRlXCIsXG4gICAgICAgIGVyYU5hcnJvdzogXCJuYXJyb3dcIlxuICAgIH07XG5cbiAgICBmb3IgKGxldCBlcmFGb3JtYXROYW1lIGluIGVyYXMpIHtcbiAgICAgICAgbGV0IGZvcm1hdE5hbWUgPSBlcmFOYW1lTWFwW2VyYUZvcm1hdE5hbWVdO1xuICAgICAgICBmb3JtYXRbZm9ybWF0TmFtZV0gPSBlcmFzW2VyYUZvcm1hdE5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRDYWxlbmRhck5hbWVzKGxvY2FsZSwgY2FsZW5kYXIpIHtcbiAgICBjb25zdCBsb2NhbGVDYWxlbmRhciA9IGNsZHJbbG9jYWxlXS5jYWxlbmRhcjtcbiAgICBsb2NhbGVDYWxlbmRhci5kYXlzID0gZ2V0Q2FsZW5kYXJOYW1lcyhjYWxlbmRhci5kYXlzKTtcbiAgICBsb2NhbGVDYWxlbmRhci5tb250aHMgPSBnZXRDYWxlbmRhck5hbWVzKGNhbGVuZGFyLm1vbnRocyk7XG4gICAgbG9jYWxlQ2FsZW5kYXIucXVhcnRlcnMgPSBnZXRDYWxlbmRhck5hbWVzKGNhbGVuZGFyLnF1YXJ0ZXJzKTtcbiAgICBsb2NhbGVDYWxlbmRhci5kYXlQZXJpb2RzID0gZ2V0Q2FsZW5kYXJOYW1lcyhjYWxlbmRhci5kYXlQZXJpb2RzLCB0cnVlKTtcblxuICAgIGxvY2FsZUNhbGVuZGFyLmVyYXMgPSBnZXRFcmFOYW1lcyhjYWxlbmRhci5lcmFzKTtcbn1cblxuZnVuY3Rpb24gbG9hZENhbGVuZGFyRGF0ZUZpZWxkcyhsb2NhbGUsIGZpZWxkcykge1xuICAgIGNvbnN0IGxvY2FsZUNhbGVuZGFyID0gY2xkcltsb2NhbGVdLmNhbGVuZGFyO1xuICAgIGNvbnN0IGRhdGVGaWVsZHMgPSB7fTtcblxuICAgIGZvciAobGV0IGZpZWxkIGluIGZpZWxkcykge1xuICAgICAgICBjb25zdCBbIGZpZWxkTmFtZSwgZm9ybWF0VHlwZSA9ICd3aWRlJyBdID0gZmllbGQuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgZmllbGRJbmZvID0gZGF0ZUZpZWxkc1tmaWVsZE5hbWVdIHx8IHt9O1xuICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGZpZWxkc1tmaWVsZF0uZGlzcGxheU5hbWU7XG5cbiAgICAgICAgaWYgKCFkaXNwbGF5TmFtZSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgIGZpZWxkSW5mb1tmb3JtYXRUeXBlXSA9IGRpc3BsYXlOYW1lO1xuICAgICAgICBkYXRlRmllbGRzW2ZpZWxkTmFtZV0gPSBmaWVsZEluZm87XG4gICAgfVxuXG4gICAgbG9jYWxlQ2FsZW5kYXIuZGF0ZUZpZWxkcyA9IGRhdGVGaWVsZHM7XG59XG5cbmZ1bmN0aW9uIGdldFByZWRlZmluZWRGb3JtYXQocGF0aHMsIGNhbGVuZGFyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKGxldCBwYXRoSWR4ID0gMDsgcGF0aElkeCA8IHBhdGhzLmxlbmd0aDsgcGF0aElkeCsrKSB7XG4gICAgICAgIGxldCBmaWVsZHMgPSBwYXRoc1sgcGF0aElkeCBdO1xuICAgICAgICBsZXQgcGF0dGVybiA9IGNhbGVuZGFyO1xuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBmaWVsZHMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm5bZmllbGRzW2lkeF1dO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhdHRlcm4pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGxvYWRDYWxlbmRhclBhdHRlcm5zKGxvY2FsZSwgY2FsZW5kYXIpIHtcbiAgICBjb25zdCBjbGRyQ2FsZW5kYXIgPSBjbGRyW2xvY2FsZV0uY2FsZW5kYXI7XG4gICAgY29uc3QgcGF0dGVybnMgPSBjbGRyQ2FsZW5kYXIucGF0dGVybnMgPSB7fTtcblxuICAgIHBhdHRlcm5zLmQgPSBnZXRQcmVkZWZpbmVkRm9ybWF0KFNIT1JUX0RBVEUsIGNhbGVuZGFyKS5yZXBsYWNlKFlFQVJfUkVHRVgsICd5Jyk7XG5cbiAgICBmb3IgKGxldCBwYXR0ZXJuIGluIGRhdGVQYXR0ZXJucykge1xuICAgICAgICBwYXR0ZXJuc1twYXR0ZXJuXSA9IGdldFByZWRlZmluZWRGb3JtYXQoZGF0ZVBhdHRlcm5zW3BhdHRlcm5dLCBjYWxlbmRhcik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgcGF0dGVybiBpbiBwcmVkZWZpbmVkRGF0ZVBhdHRlcm5zKSB7XG4gICAgICAgIHBhdHRlcm5zW3BhdHRlcm5dID0gcHJlZGVmaW5lZERhdGVQYXR0ZXJuc1twYXR0ZXJuXTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlVGltZUZvcm1hdHMgPSBjYWxlbmRhci5kYXRlVGltZUZvcm1hdHM7XG4gICAgY2xkckNhbGVuZGFyLmRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgICAgICAgZnVsbDogZGF0ZVRpbWVGb3JtYXRzLmZ1bGwsXG4gICAgICAgIGxvbmc6IGRhdGVUaW1lRm9ybWF0cy5sb25nLFxuICAgICAgICBtZWRpdW06IGRhdGVUaW1lRm9ybWF0cy5tZWRpdW0sXG4gICAgICAgIHNob3J0OiBkYXRlVGltZUZvcm1hdHMuc2hvcnQsXG4gICAgICAgIGF2YWlsYWJsZUZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cy5hdmFpbGFibGVGb3JtYXRzXG4gICAgfTtcbiAgICBjbGRyQ2FsZW5kYXIudGltZUZvcm1hdHMgPSBjYWxlbmRhci50aW1lRm9ybWF0cztcbiAgICBjbGRyQ2FsZW5kYXIuZGF0ZUZvcm1hdHMgPSBjYWxlbmRhci5kYXRlRm9ybWF0cztcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ2FsZW5kYXJJbmZvKGxvY2FsZSwgaW5mbykge1xuICAgIGNvbnN0IGNhbGVuZGFyID0gY2xkcltsb2NhbGVdLmNhbGVuZGFyID0gY2xkcltsb2NhbGVdLmNhbGVuZGFyIHx8IHt9O1xuICAgIGZvciAobGV0IGZpZWxkIGluIGluZm8pIHtcbiAgICAgICAgaWYgKGZpZWxkID09PSBcInRpbWVab25lTmFtZXNcIikge1xuICAgICAgICAgICAgY2FsZW5kYXIuZ210Rm9ybWF0ID0gaW5mb1tmaWVsZF0uZ210Rm9ybWF0O1xuICAgICAgICAgICAgY2FsZW5kYXIuZ210WmVyb0Zvcm1hdCA9IGluZm9bZmllbGRdLmdtdFplcm9Gb3JtYXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09IFwiY2FsZW5kYXJzXCIgJiYgaW5mb1tmaWVsZF0uZ3JlZ29yaWFuKSB7XG4gICAgICAgICAgICBsb2FkQ2FsZW5kYXJQYXR0ZXJucyhsb2NhbGUsIGluZm9bZmllbGRdLmdyZWdvcmlhbik7XG4gICAgICAgICAgICBsb2FkQ2FsZW5kYXJOYW1lcyhsb2NhbGUsIGluZm9bZmllbGRdLmdyZWdvcmlhbik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09IFwiZmllbGRzXCIpIHtcbiAgICAgICAgICAgIGxvYWRDYWxlbmRhckRhdGVGaWVsZHMobG9jYWxlLCBpbmZvLmZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjbGRyIH0gZnJvbSAnLi9pbmZvJztcblxuZnVuY3Rpb24gdGVycml0b3J5RnJvbU5hbWUobmFtZSwgaWRlbnRpdHkpIHtcbiAgICBjb25zdCBsaWtlbHlTdWJ0YWdzID0gY2xkci5zdXBwbGVtZW50YWwubGlrZWx5U3VidGFncztcbiAgICBsZXQgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcbiAgICBpZiAobGlrZWx5U3VidGFncykge1xuICAgICAgICBjb25zdCBsaWtlbHlOYW1lID0gbGlrZWx5U3VidGFnc1tuYW1lXSB8fCBsaWtlbHlTdWJ0YWdzW3BhcnRzWzBdXTtcbiAgICAgICAgaWYgKGxpa2VseU5hbWUpIHtcbiAgICAgICAgICAgIHBhcnRzID0gbGlrZWx5TmFtZS5zcGxpdChcIi1cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaWRlbnRpdHkpIHtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gcGFydHMubGVuZ3RoIC0gMTsgaWR4ID49IDE7IGlkeC0tKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaWR4XTtcbiAgICAgICAgICAgIGlmIChwYXJ0ID09PSBpZGVudGl0eS52YXJpYW50IHx8IHBhcnQgPT09IGlkZW50aXR5LnNjcmlwdCkge1xuICAgICAgICAgICAgICAgIHBhcnRzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgdGVycml0b3J5ID0gcGFydHNbbGVuZ3RoIC0gMV07XG4gICAgICAgIHJldHVybiB0ZXJyaXRvcnkudG9VcHBlckNhc2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2FsZVRlcnJpdG9yeShpbmZvKSB7XG4gICAgaWYgKGluZm8udGVycml0b3J5KSB7XG4gICAgICAgIHJldHVybiBpbmZvLnRlcnJpdG9yeTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gaW5mby5uYW1lO1xuICAgIGNvbnN0IGlkZW50aXR5ID0gaW5mby5pZGVudGl0eTtcbiAgICBsZXQgdGVycml0b3J5O1xuXG4gICAgaWYgKGlkZW50aXR5ICYmIGlkZW50aXR5LnRlcnJpdG9yeSkge1xuICAgICAgICB0ZXJyaXRvcnkgPSBpZGVudGl0eS50ZXJyaXRvcnk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGVycml0b3J5ID0gdGVycml0b3J5RnJvbU5hbWUobmFtZSwgaWRlbnRpdHkpO1xuICAgIH1cblxuICAgIGluZm8udGVycml0b3J5ID0gdGVycml0b3J5O1xuXG4gICAgcmV0dXJuIHRlcnJpdG9yeTtcbn1cbiIsImltcG9ydCB7IGNsZHIgfSBmcm9tICcuL2luZm8nO1xuaW1wb3J0IGxvYWROdW1iZXJzSW5mbyBmcm9tICcuL2xvYWQtbnVtYmVycyc7XG5pbXBvcnQgbG9hZENhbGVuZGFySW5mbyBmcm9tICcuL2xvYWQtZGF0ZXMnO1xuaW1wb3J0IGxvY2FsZVRlcnJpdG9yeSBmcm9tICcuL3RlcnJpdG9yeSc7XG5cbmZ1bmN0aW9uIGxvYWRMb2NhbGUobG9jYWxlLCBpbmZvKSB7XG4gICAgZm9yIChsZXQgZmllbGQgaW4gaW5mbykge1xuICAgICAgICBpZiAoZmllbGQgPT09IFwibnVtYmVyc1wiKSB7XG4gICAgICAgICAgICBsb2FkTnVtYmVyc0luZm8obG9jYWxlLCBpbmZvW2ZpZWxkXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09IFwiZGF0ZXNcIikge1xuICAgICAgICAgICAgbG9hZENhbGVuZGFySW5mbyhsb2NhbGUsIGluZm9bZmllbGRdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgbGV0IGVudHJ5ID0gYXJndW1lbnRzW2lkeF07XG4gICAgICAgIGlmIChlbnRyeS5tYWluKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxlID0gT2JqZWN0LmtleXMoZW50cnkubWFpbilbMF07XG4gICAgICAgICAgICBsZXQgaW5mbyA9IGVudHJ5Lm1haW5bbG9jYWxlXTtcbiAgICAgICAgICAgIGxldCBsb2NhbGVJbmZvID0gY2xkcltsb2NhbGVdID0gY2xkcltsb2NhbGVdIHx8IHt9O1xuXG4gICAgICAgICAgICBsb2NhbGVJbmZvLm5hbWUgPSBsb2NhbGVJbmZvLm5hbWUgfHwgbG9jYWxlO1xuICAgICAgICAgICAgbG9jYWxlSW5mby5pZGVudGl0eSA9IGxvY2FsZUluZm8uaWRlbnRpdHkgfHwgaW5mby5pZGVudGl0eTtcblxuICAgICAgICAgICAgbG9jYWxlVGVycml0b3J5KGxvY2FsZUluZm8pO1xuICAgICAgICAgICAgbG9hZExvY2FsZShsb2NhbGUsIGluZm8pO1xuICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LnN1cHBsZW1lbnRhbCkge1xuICAgICAgICAgICAgaWYgKGVudHJ5LnN1cHBsZW1lbnRhbC53ZWVrRGF0YSkge1xuICAgICAgICAgICAgICAgIGNsZHIuc3VwcGxlbWVudGFsLndlZWtEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdERheTogZW50cnkuc3VwcGxlbWVudGFsLndlZWtEYXRhLmZpcnN0RGF5LFxuICAgICAgICAgICAgICAgICAgICB3ZWVrZW5kU3RhcnQ6IGVudHJ5LnN1cHBsZW1lbnRhbC53ZWVrRGF0YS53ZWVrZW5kU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHdlZWtlbmRFbmQ6IGVudHJ5LnN1cHBsZW1lbnRhbC53ZWVrRGF0YS53ZWVrZW5kRW5kXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjbGRyLnN1cHBsZW1lbnRhbCwgZW50cnkuc3VwcGxlbWVudGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNsZHIgfSBmcm9tICcuL2luZm8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcbiAgICBjb25zdCBsb2NhbGUgPSBkYXRhLm5hbWU7XG4gICAgY29uc3QgaW5mbyA9IGNsZHJbbG9jYWxlXSA9IGNsZHJbbG9jYWxlXSB8fCB7fTtcbiAgICBpZiAoZGF0YS5saWtlbHlTdWJ0YWdzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBsZW1lbnRhbCA9IGNsZHIuc3VwcGxlbWVudGFsID0gY2xkci5zdXBwbGVtZW50YWwgfHwge307XG4gICAgICAgIHN1cHBsZW1lbnRhbC5saWtlbHlTdWJ0YWdzID0gT2JqZWN0LmFzc2lnbihzdXBwbGVtZW50YWwubGlrZWx5U3VidGFncyB8fCB7fSwgZGF0YS5saWtlbHlTdWJ0YWdzKTtcbiAgICB9XG5cbiAgICBjb25zdCBudW1iZXJzID0gaW5mby5udW1iZXJzO1xuXG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCBkYXRhKTtcblxuICAgIGlmIChudW1iZXJzICYmIGRhdGEubnVtYmVycykge1xuICAgICAgICBpbmZvLm51bWJlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBudW1iZXJzLCBkYXRhLm51bWJlcnMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBsb2NhbGVJbmZvIH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IGVycm9ycyB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBERUZBVUxUX0xPQ0FMRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlRmllbGROYW1lKG9wdGlvbnMsIGxvY2FsZSA9IERFRkFVTFRfTE9DQUxFKSB7XG4gICAgY29uc3QgaW5mbyA9IGxvY2FsZUluZm8obG9jYWxlKTtcbiAgICBjb25zdCBkYXRlRmllbGRzID0gaW5mby5jYWxlbmRhci5kYXRlRmllbGRzO1xuICAgIGlmICghZGF0ZUZpZWxkcykge1xuICAgICAgICB0aHJvdyBlcnJvcnMuTm9EYXRlRmllbGROYW1lcy5lcnJvcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkTmFtZUluZm8gPSBkYXRlRmllbGRzW29wdGlvbnMudHlwZV0gfHwge307XG5cbiAgICByZXR1cm4gZmllbGROYW1lSW5mb1tvcHRpb25zLm5hbWVUeXBlXSB8fCBmaWVsZE5hbWVJbmZvWyd3aWRlJ107XG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhbGVJbmZvIH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIGxvd2VyQXJyYXkoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgYXJyLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXJyW2lkeF0udG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGxvd2VyT2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAobGV0IGZpZWxkIGluIG9iaikge1xuICAgICAgICByZXN1bHRbZmllbGRdID0gb2JqW2ZpZWxkXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbG9uZUxvd2VyKG9iaikge1xuICAgIGxldCByZXN1bHQgPSBBcnJheS5pc0FycmF5KG9iaikgPyBsb3dlckFycmF5KG9iaikgOiBsb3dlck9iamVjdChvYmopO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGb3JtYXROYW1lcyhsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHR5cGUsIG5hbWVUeXBlLCBzdGFuZEFsb25lLCBsb3dlciB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBpbmZvID0gZ2V0TG9jYWxlSW5mbyhsb2NhbGUpO1xuICAgIGNvbnN0IGZvcm1hdFR5cGUgPSBzdGFuZEFsb25lID8gXCJzdGFuZC1hbG9uZVwiIDogXCJmb3JtYXRcIjtcbiAgICBjb25zdCBsb3dlck5hbWVUeXBlID0gKGxvd2VyID8gXCJsb3dlci1cIiA6IEVNUFRZKSArIG5hbWVUeXBlO1xuICAgIGNvbnN0IGZvcm1hdE5hbWVzID0gaW5mby5jYWxlbmRhclt0eXBlXVtmb3JtYXRUeXBlXTtcbiAgICBsZXQgcmVzdWx0ID0gZm9ybWF0TmFtZXNbbG93ZXJOYW1lVHlwZV07XG4gICAgaWYgKCFyZXN1bHQgJiYgbG93ZXIpIHtcbiAgICAgICAgcmVzdWx0ID0gZm9ybWF0TmFtZXNbbG93ZXJOYW1lVHlwZV0gPSBjbG9uZUxvd2VyKGZvcm1hdE5hbWVzW25hbWVUeXBlXSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VSYW5nZURhdGUodmFsdWUpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChwYXJ0c1sxXSwgMTApIC0gMTtcbiAgICBjb25zdCBkYXkgPSBwYXJzZUludChwYXJ0c1syXSwgMTApO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xufVxuIiwiaW1wb3J0IHsgY2xkciwgZ2V0TG9jYWxlSW5mbyB9IGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IGxvY2FsZVRlcnJpdG9yeSBmcm9tICcuL3RlcnJpdG9yeSc7XG5pbXBvcnQgcGFyc2VSYW5nZURhdGUgZnJvbSAnLi9wYXJzZS1yYW5nZS1kYXRlJztcblxuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cblxuY29uc3Qge1xuICAgIE5vQ3VycmVuY3ksXG4gICAgTm9DdXJyZW5jeURpc3BsYXksXG4gICAgTm9TdXBwbGVtZW50YWxDdXJyZW5jeSxcbiAgICBOb0N1cnJlbmN5UmVnaW9uLFxuICAgIE5vVmFsaWRDdXJyZW5jeVxufSA9IGVycm9ycztcblxuY29uc3QgREVGQVVMVF9DVVJSRU5DWV9GUkFDVElPTlMgPSAyO1xuY29uc3QgU1lNQk9MID0gXCJzeW1ib2xcIjtcbmNvbnN0IElOVkFMSURfQ1VSUkVOQ1lfQ09ERSA9ICdYWFgnO1xuXG5jb25zdCBHTE9CQUxfQ1VSUkVOQ0lFUyA9IHtcbiAgICAnMDAxJzogJ1VTRCcsIC8vIDAwMSByZWZlcnMgdG8gd29ybGQuIG5vdCBzdXJlIGlmIGl0IGlzIGNvcnJlY3QgdG8gYXNzdW1lIFVTRCBidXQgc2VlbXMgYmV0dGVyIHRoYW4gdGhyb3cgYW4gZXJyb3JcbiAgICAnMTUwJzogJ0VVUicgLy8gMTUwIHRlcnJpdG9yeSBmb3IgRXVyb3BlXG5cbn07XG5cbmZ1bmN0aW9uIGdldEN1cnJlbmN5SW5mbyhsb2NhbGUsIGN1cnJlbmN5LCB0aHJvd0lmTm9WYWxpZCkge1xuICAgIGNvbnN0IGluZm8gPSBnZXRMb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgY29uc3QgY3VycmVuY2llcyA9IGluZm8ubnVtYmVycy5jdXJyZW5jaWVzO1xuICAgIGlmICghY3VycmVuY2llcykge1xuICAgICAgICBpZiAodGhyb3dJZk5vVmFsaWQpIHtcbiAgICAgICAgICAgIHRocm93IE5vQ3VycmVuY3kuZXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW5jeURpc3BsYXlJbmZvID0gY3VycmVuY2llc1tjdXJyZW5jeV07XG5cbiAgICBpZiAoIWN1cnJlbmN5RGlzcGxheUluZm8pIHtcbiAgICAgICAgaWYgKHRocm93SWZOb1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBOb0N1cnJlbmN5RGlzcGxheS5lcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW5jeURpc3BsYXlJbmZvO1xufVxuXG5mdW5jdGlvbiBsZW5ndGhDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlZ2lvbkN1cnJlbmN5KHJlZ2lvbkN1cnJlbmNpZXMpIHtcbiAgICBsZXQgbGF0ZXN0VmFsaWRVbnRpbCwgbGF0ZXN0VmFsaWRVbnRpbFJhbmdlO1xuICAgIGxldCBsYXRlc3RTdGlsbFZhbGlkLCBsYXRlc3RTdGlsbFZhbGlkRGF0ZTtcblxuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHJlZ2lvbkN1cnJlbmNpZXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBjb25zdCBjdXJyZW5jeSA9IHJlZ2lvbkN1cnJlbmNpZXNbaWR4XTtcbiAgICAgICAgY29uc3QgY29kZSA9IE9iamVjdC5rZXlzKGN1cnJlbmN5KVswXTtcbiAgICAgICAgY29uc3QgaW5mbyA9IGN1cnJlbmN5W2NvZGVdO1xuICAgICAgICBpZiAoY29kZSAhPT0gSU5WQUxJRF9DVVJSRU5DWV9DT0RFICYmIGluZm8uX3RlbmRlciAhPT0gJ2ZhbHNlJyAmJiBpbmZvLl9mcm9tKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8uX3RvKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RpbGxWYWxpZERhdGUgPSBwYXJzZVJhbmdlRGF0ZShpbmZvLl9mcm9tKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxhdGVzdFN0aWxsVmFsaWREYXRlIHx8IGxhdGVzdFN0aWxsVmFsaWREYXRlIDwgc3RpbGxWYWxpZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0U3RpbGxWYWxpZCA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdFN0aWxsVmFsaWREYXRlID0gc3RpbGxWYWxpZERhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghbGF0ZXN0U3RpbGxWYWxpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkRnJvbSA9IHBhcnNlUmFuZ2VEYXRlKGluZm8uX2Zyb20pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkVG8gPSBwYXJzZVJhbmdlRGF0ZShpbmZvLl90byk7XG4gICAgICAgICAgICAgICAgaWYgKCFsYXRlc3RWYWxpZFVudGlsUmFuZ2UgfHwgbGF0ZXN0VmFsaWRVbnRpbFJhbmdlLnRvIDwgdmFsaWRUbyB8fCBsYXRlc3RWYWxpZFVudGlsUmFuZ2UuZnJvbSA8IHZhbGlkRnJvbSkge1xuICAgICAgICAgICAgICAgICAgICBsYXRlc3RWYWxpZFVudGlsID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0VmFsaWRVbnRpbFJhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogdmFsaWRGcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHZhbGlkVG9cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGF0ZXN0U3RpbGxWYWxpZCB8fCBsYXRlc3RWYWxpZFVudGlsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lEaXNwbGF5cyhsb2NhbGUsIGN1cnJlbmN5LCB0aHJvd0lmTm9WYWxpZCA9IHRydWUpIHtcbiAgICBjb25zdCBjdXJyZW5jeUluZm8gPSBnZXRDdXJyZW5jeUluZm8obG9jYWxlLCBjdXJyZW5jeSwgdGhyb3dJZk5vVmFsaWQpO1xuICAgIGlmICghY3VycmVuY3lJbmZvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWN1cnJlbmN5SW5mby5kaXNwbGF5cykge1xuICAgICAgICBjb25zdCBkaXNwbGF5cyA9IFsgY3VycmVuY3kgXTtcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gY3VycmVuY3lJbmZvKSB7XG4gICAgICAgICAgICBkaXNwbGF5cy5wdXNoKGN1cnJlbmN5SW5mb1tmaWVsZF0pO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlzLnNvcnQobGVuZ3RoQ29tcGFyZXIpO1xuICAgICAgICBjdXJyZW5jeUluZm8uZGlzcGxheXMgPSBkaXNwbGF5cztcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVuY3lJbmZvLmRpc3BsYXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lEaXNwbGF5KGxvY2FsZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgdmFsdWUsIGN1cnJlbmN5LCBjdXJyZW5jeURpc3BsYXkgPSBTWU1CT0wgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoY3VycmVuY3lEaXNwbGF5ID09PSBcImNvZGVcIikge1xuICAgICAgICByZXR1cm4gY3VycmVuY3k7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVuY3lJbmZvID0gZ2V0Q3VycmVuY3lJbmZvKGxvY2FsZSwgY3VycmVuY3ksIHRydWUpO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoY3VycmVuY3lEaXNwbGF5ID09PSBTWU1CT0wpIHtcbiAgICAgICAgcmVzdWx0ID0gY3VycmVuY3lJbmZvW1wic3ltYm9sLWFsdC1uYXJyb3dcIl0gfHwgY3VycmVuY3lJbmZvW1NZTUJPTF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlICE9PSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjdXJyZW5jeUluZm9bXCJkaXNwbGF5TmFtZS1jb3VudC1vdGhlclwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGN1cnJlbmN5SW5mb1tcImRpc3BsYXlOYW1lLWNvdW50LW9uZVwiXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW5jeUZyYWN0aW9uT3B0aW9ucyhjb2RlKSB7XG4gICAgbGV0IG1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IERFRkFVTFRfQ1VSUkVOQ1lfRlJBQ1RJT05TO1xuICAgIGxldCBtYXhpbXVtRnJhY3Rpb25EaWdpdHMgPSBERUZBVUxUX0NVUlJFTkNZX0ZSQUNUSU9OUztcblxuICAgIGNvbnN0IGZyYWN0aW9ucyA9ICgoY2xkci5zdXBwbGVtZW50YWwuY3VycmVuY3lEYXRhIHx8IHt9KS5mcmFjdGlvbnMgfHwge30pW2NvZGVdO1xuXG4gICAgaWYgKGZyYWN0aW9ucyAmJiBmcmFjdGlvbnMuX2RpZ2l0cykge1xuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHMgPSBtaW5pbXVtRnJhY3Rpb25EaWdpdHMgPSBwYXJzZUludChmcmFjdGlvbnMuX2RpZ2l0cywgMTApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogbWluaW11bUZyYWN0aW9uRGlnaXRzLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG1heGltdW1GcmFjdGlvbkRpZ2l0c1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJyaXRvcnlDdXJyZW5jeUNvZGUodGVycml0b3J5LCB0aHJvd0lmTm9WYWxpZCA9IHRydWUpIHtcbiAgICBpZiAoR0xPQkFMX0NVUlJFTkNJRVNbdGVycml0b3J5XSkge1xuICAgICAgICByZXR1cm4gR0xPQkFMX0NVUlJFTkNJRVNbdGVycml0b3J5XTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW5jeURhdGEgPSBjbGRyLnN1cHBsZW1lbnRhbC5jdXJyZW5jeURhdGE7XG4gICAgaWYgKCFjdXJyZW5jeURhdGEpIHtcbiAgICAgICAgaWYgKHRocm93SWZOb1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBOb1N1cHBsZW1lbnRhbEN1cnJlbmN5LmVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVnaW9uQ3VycmVuY2llcyA9IGN1cnJlbmN5RGF0YS5yZWdpb25bdGVycml0b3J5XTtcblxuICAgIGlmICghcmVnaW9uQ3VycmVuY2llcykge1xuICAgICAgICBpZiAodGhyb3dJZk5vVmFsaWQpIHtcbiAgICAgICAgICAgIHRocm93IE5vQ3VycmVuY3lSZWdpb24uZXJyb3IodGVycml0b3J5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW5jeUNvZGUgPSByZWdpb25DdXJyZW5jeShyZWdpb25DdXJyZW5jaWVzKTtcblxuICAgIHJldHVybiBjdXJyZW5jeUNvZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVDdXJyZW5jeShsb2NhbGUsIHRocm93SWZOb1ZhbGlkKSB7XG4gICAgY29uc3QgaW5mbyA9IGdldExvY2FsZUluZm8obG9jYWxlKTtcbiAgICBjb25zdCBudW1iZXJzID0gaW5mby5udW1iZXJzO1xuXG4gICAgaWYgKCFudW1iZXJzLmxvY2FsZUN1cnJlbmN5KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gdGVycml0b3J5Q3VycmVuY3lDb2RlKGxvY2FsZVRlcnJpdG9yeShpbmZvKSwgdGhyb3dJZk5vVmFsaWQpO1xuXG4gICAgICAgIGlmICghY3VycmVuY3kgJiYgdGhyb3dJZk5vVmFsaWQpIHtcbiAgICAgICAgICAgIHRocm93IE5vVmFsaWRDdXJyZW5jeS5lcnJvcihpbmZvLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbnVtYmVycy5sb2NhbGVDdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIH1cblxuICAgIHJldHVybiBudW1iZXJzLmxvY2FsZUN1cnJlbmN5O1xufVxuIiwiXG5leHBvcnQgY29uc3QgREFZU19PRl9XRUVLID0gWyBcInN1blwiLCBcIm1vblwiLCBcInR1ZVwiLCBcIndlZFwiLCBcInRodVwiLCBcImZyaVwiLCBcInNhdFwiIF07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RFUlJJVE9SWSA9ICcwMDEnO1xuIiwiaW1wb3J0IHsgY2xkciwgZ2V0TG9jYWxlSW5mbyB9IGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgbG9jYWxlVGVycml0b3J5IGZyb20gJy4vdGVycml0b3J5JztcblxuaW1wb3J0IHsgREFZU19PRl9XRUVLLCBERUZBVUxUX1RFUlJJVE9SWSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGVycm9ycyB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbmNvbnN0IHsgTm9XZWVrRGF0YSwgTm9GaXJzdERheSB9ID0gZXJyb3JzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaXJzdERheShsb2NhbGUpIHtcbiAgICBjb25zdCBpbmZvID0gZ2V0TG9jYWxlSW5mbyhsb2NhbGUpO1xuXG4gICAgaWYgKCFpc05hTihpbmZvLmZpcnN0RGF5KSkge1xuICAgICAgICByZXR1cm4gaW5mby5maXJzdERheTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWVrRGF0YSA9IGNsZHIuc3VwcGxlbWVudGFsLndlZWtEYXRhO1xuICAgIGlmICghd2Vla0RhdGEpIHtcbiAgICAgICAgdGhyb3cgTm9XZWVrRGF0YS5lcnJvcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0RGF5ID0gd2Vla0RhdGEuZmlyc3REYXlbbG9jYWxlVGVycml0b3J5KGluZm8pXSB8fCB3ZWVrRGF0YS5maXJzdERheVtERUZBVUxUX1RFUlJJVE9SWV07XG5cbiAgICBpZiAoIWZpcnN0RGF5KSB7XG4gICAgICAgIHRocm93IE5vRmlyc3REYXkuZXJyb3IoKTtcbiAgICB9XG5cbiAgICBpbmZvLmZpcnN0RGF5ID0gREFZU19PRl9XRUVLLmluZGV4T2YoZmlyc3REYXkpO1xuXG4gICAgcmV0dXJuIGluZm8uZmlyc3REYXk7XG59XG4iLCJpbXBvcnQgeyBjbGRyLCBnZXRMb2NhbGVJbmZvIH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCBsb2NhbGVUZXJyaXRvcnkgZnJvbSAnLi90ZXJyaXRvcnknO1xuXG5pbXBvcnQgeyBEQVlTX09GX1dFRUssIERFRkFVTFRfVEVSUklUT1JZIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3JzIH0gZnJvbSAnLi4vZXJyb3JzJztcblxuY29uc3QgeyBOb1dlZWtEYXRhIH0gPSBlcnJvcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlZWtlbmRSYW5nZShsb2NhbGUpIHtcbiAgICBjb25zdCBpbmZvID0gZ2V0TG9jYWxlSW5mbyhsb2NhbGUpO1xuXG4gICAgaWYgKGluZm8ud2Vla2VuZFJhbmdlKSB7XG4gICAgICAgIHJldHVybiBpbmZvLndlZWtlbmRSYW5nZTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWVrRGF0YSA9IGNsZHIuc3VwcGxlbWVudGFsLndlZWtEYXRhO1xuICAgIGlmICghd2Vla0RhdGEpIHtcbiAgICAgICAgdGhyb3cgTm9XZWVrRGF0YS5lcnJvcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcnJpdG9yeSA9IGxvY2FsZVRlcnJpdG9yeShpbmZvKTtcbiAgICBjb25zdCBzdGFydCA9IHdlZWtEYXRhLndlZWtlbmRTdGFydFt0ZXJyaXRvcnldIHx8IHdlZWtEYXRhLndlZWtlbmRTdGFydFtERUZBVUxUX1RFUlJJVE9SWV07XG4gICAgY29uc3QgZW5kID0gd2Vla0RhdGEud2Vla2VuZEVuZFt0ZXJyaXRvcnldIHx8IHdlZWtEYXRhLndlZWtlbmRFbmRbREVGQVVMVF9URVJSSVRPUlldO1xuXG4gICAgaW5mby53ZWVrZW5kUmFuZ2UgPSB7XG4gICAgICAgIHN0YXJ0OiBEQVlTX09GX1dFRUsuaW5kZXhPZihzdGFydCksXG4gICAgICAgIGVuZDogREFZU19PRl9XRUVLLmluZGV4T2YoZW5kKVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5mby53ZWVrZW5kUmFuZ2U7XG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhbGVJbmZvIH0gZnJvbSAnLi9pbmZvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyU3ltYm9scyhsb2NhbGUpIHtcbiAgICBjb25zdCBpbmZvID0gZ2V0TG9jYWxlSW5mbyhsb2NhbGUpO1xuXG4gICAgcmV0dXJuIGluZm8ubnVtYmVycy5zeW1ib2xzO1xufSIsImltcG9ydCB7IGN1cnJlbmN5RGlzcGxheSwgbG9jYWxlQ3VycmVuY3kgfSBmcm9tICcuLi9jbGRyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3lTeW1ib2woaW5mbywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFvcHRpb25zLmN1cnJlbmN5KSB7XG4gICAgICAgIG9wdGlvbnMuY3VycmVuY3kgPSBsb2NhbGVDdXJyZW5jeShpbmZvLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gY3VycmVuY3lEaXNwbGF5KGluZm8sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGRpc3BsYXk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncm91cEludGVnZXIobnVtYmVyLCBzdGFydCwgZW5kLCBvcHRpb25zLCBpbmZvKSB7XG4gICAgY29uc3Qgc3ltYm9scyA9IGluZm8ubnVtYmVycy5zeW1ib2xzO1xuICAgIGNvbnN0IGRlY2ltYWxJbmRleCA9IG51bWJlci5pbmRleE9mKHN5bWJvbHMuZGVjaW1hbCk7XG4gICAgY29uc3QgZ3JvdXBTaXplcyA9IG9wdGlvbnMuZ3JvdXBTaXplLnNsaWNlKCk7XG4gICAgbGV0IGdyb3VwU2l6ZSA9IGdyb3VwU2l6ZXMuc2hpZnQoKTtcblxuICAgIGxldCBpbnRlZ2VyRW5kID0gZGVjaW1hbEluZGV4ICE9PSAtMSA/IGRlY2ltYWxJbmRleCA6IGVuZCArIDE7XG5cbiAgICBsZXQgaW50ZWdlciA9IG51bWJlci5zdWJzdHJpbmcoc3RhcnQsIGludGVnZXJFbmQpO1xuICAgIGxldCByZXN1bHQgPSBudW1iZXI7XG4gICAgY29uc3QgaW50ZWdlckxlbmd0aCA9IGludGVnZXIubGVuZ3RoO1xuXG4gICAgaWYgKGludGVnZXJMZW5ndGggPj0gZ3JvdXBTaXplKSB7XG4gICAgICAgIGxldCBpZHggPSBpbnRlZ2VyTGVuZ3RoO1xuICAgICAgICBsZXQgcGFydHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGludGVnZXIuc3Vic3RyaW5nKGlkeCAtIGdyb3VwU2l6ZSwgaWR4KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWR4IC09IGdyb3VwU2l6ZTtcbiAgICAgICAgICAgIGxldCBuZXdHcm91cFNpemUgPSBncm91cFNpemVzLnNoaWZ0KCk7XG4gICAgICAgICAgICBncm91cFNpemUgPSBuZXdHcm91cFNpemUgIT09IHVuZGVmaW5lZCA/IG5ld0dyb3VwU2l6ZSA6IGdyb3VwU2l6ZTtcblxuICAgICAgICAgICAgaWYgKGdyb3VwU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gaW50ZWdlci5zdWJzdHJpbmcoMCwgaWR4KTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW50ZWdlciA9IHBhcnRzLnJldmVyc2UoKS5qb2luKHN5bWJvbHMuZ3JvdXApO1xuICAgICAgICByZXN1bHQgPSBudW1iZXIuc3Vic3RyaW5nKDAsIHN0YXJ0KSArIGludGVnZXIgKyBudW1iZXIuc3Vic3RyaW5nKGludGVnZXJFbmQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgQ1VSUkVOQ1ksIEFDQ09VTlRJTkcgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDdXJyZW5jeVN0eWxlKHN0eWxlKSB7XG4gICAgcmV0dXJuIHN0eWxlID09PSBDVVJSRU5DWSB8fCBzdHlsZSA9PT0gQUNDT1VOVElORztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWQobnVtYmVyLCBkaWdpdHMgPSAyLCByaWdodCA9IGZhbHNlKSB7XG4gICAgY29uc3QgY291bnQgPSBkaWdpdHMgLSBTdHJpbmcobnVtYmVyKS5sZW5ndGg7XG4gICAgbGV0IHJlc3VsdCA9IG51bWJlcjtcblxuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgY29uc3QgcGFkU3RyaW5nID0gbmV3IEFycmF5KGNvdW50ICsgMSkuam9pbihcIjBcIik7XG4gICAgICAgIHJlc3VsdCA9IHJpZ2h0ID8gbnVtYmVyICsgcGFkU3RyaW5nIDogcGFkU3RyaW5nICsgbnVtYmVyO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiY29uc3QgTUFYX1BSRUNJU0lPTiA9IDIwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3VuZCh2YWx1ZSwgcHJlY2lzaW9uKSB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgIGxldCBkZWNpbWFscyA9IHByZWNpc2lvbiB8fCAwO1xuXG4gICAgcmVzdWx0ID0gcmVzdWx0LnRvU3RyaW5nKCkuc3BsaXQoJ2UnKTtcbiAgICByZXN1bHQgPSBNYXRoLnJvdW5kKE51bWJlcihyZXN1bHRbMF0gKyAnZScgKyAocmVzdWx0WzFdID8gKE51bWJlcihyZXN1bHRbMV0pICsgZGVjaW1hbHMpIDogZGVjaW1hbHMpKSk7XG5cbiAgICByZXN1bHQgPSByZXN1bHQudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgIHJlc3VsdCA9IE51bWJlcihyZXN1bHRbMF0gKyAnZScgKyAocmVzdWx0WzFdID8gKE51bWJlcihyZXN1bHRbMV0pIC0gZGVjaW1hbHMpIDogLWRlY2ltYWxzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0LnRvRml4ZWQoTWF0aC5taW4oZGVjaW1hbHMsIE1BWF9QUkVDSVNJT04pKTtcbn0iLCJpbXBvcnQgeyBQRVJDRU5ULCBTQ0lFTlRJRklDLCBOVU1CRVJfUExBQ0VIT0xERVIsIENVUlJFTkNZX1BMQUNFSE9MREVSLCBQRVJDRU5UX1BMQUNFSE9MREVSLCBFTVBUWSwgUE9JTlQgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBmb3JtYXRDdXJyZW5jeVN5bWJvbCBmcm9tICcuL2Zvcm1hdC1jdXJyZW5jeS1zeW1ib2wnO1xuaW1wb3J0IGdyb3VwSW50ZWdlciBmcm9tICcuL2dyb3VwLWludGVnZXInO1xuaW1wb3J0IGlzQ3VycmVuY3lTdHlsZSBmcm9tICcuL2lzLWN1cnJlbmN5LXN0eWxlJztcbmltcG9ydCBwYWQgZnJvbSAnLi4vY29tbW9uL3BhZCc7XG5pbXBvcnQgcm91bmQgZnJvbSAnLi4vY29tbW9uL3JvdW5kJztcbmltcG9ydCB7IGN1cnJlbmN5RnJhY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vY2xkcic7XG5cbmNvbnN0IERFRkFVTFRfREVDSU1BTF9ST1VORElORyA9IDM7XG5jb25zdCBERUZBVUxUX1BFUkNFTlRfUk9VTkRJTkcgPSAwO1xuXG5jb25zdCB0cmFpbGluZ1plcm9SZWdleCA9IC8wKyQvO1xuXG5mdW5jdGlvbiBmcmFjdGlvbk9wdGlvbnMob3B0aW9ucykge1xuICAgIGxldCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0cywgbWF4aW11bUZyYWN0aW9uRGlnaXRzLCBzdHlsZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBpc0N1cnJlbmN5ID0gaXNDdXJyZW5jeVN0eWxlKHN0eWxlKTtcbiAgICBsZXQgY3VycmVuY3lGcmFjdGlvbnM7XG4gICAgaWYgKGlzQ3VycmVuY3kpIHtcbiAgICAgICAgY3VycmVuY3lGcmFjdGlvbnMgPSBjdXJyZW5jeUZyYWN0aW9uT3B0aW9ucyhvcHRpb25zLmN1cnJlbmN5KTtcbiAgICB9XG5cbiAgICBpZiAobWluaW11bUZyYWN0aW9uRGlnaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzID0gaXNDdXJyZW5jeSA/IGN1cnJlbmN5RnJhY3Rpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA6IDA7XG4gICAgfVxuXG4gICAgaWYgKG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzdHlsZSA9PT0gUEVSQ0VOVCkge1xuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzID0gTWF0aC5tYXgobWluaW11bUZyYWN0aW9uRGlnaXRzLCBERUZBVUxUX1BFUkNFTlRfUk9VTkRJTkcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ3VycmVuY3kpIHtcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IE1hdGgubWF4KG1pbmltdW1GcmFjdGlvbkRpZ2l0cywgY3VycmVuY3lGcmFjdGlvbnMubWF4aW11bUZyYWN0aW9uRGlnaXRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IE1hdGgubWF4KG1pbmltdW1GcmFjdGlvbkRpZ2l0cywgREVGQVVMVF9ERUNJTUFMX1JPVU5ESU5HKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogbWluaW11bUZyYWN0aW9uRGlnaXRzLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG1heGltdW1GcmFjdGlvbkRpZ2l0c1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFwcGx5UGF0dGVybih2YWx1ZSwgcGF0dGVybiwgc3ltYm9sKSB7XG4gICAgbGV0IHJlc3VsdCA9IEVNUFRZO1xuICAgIGZvciAobGV0IGlkeCA9IDAsIGxlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGxldCBjaCA9IHBhdHRlcm4uY2hhckF0KGlkeCk7XG5cbiAgICAgICAgaWYgKGNoID09PSBOVU1CRVJfUExBQ0VIT0xERVIpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gQ1VSUkVOQ1lfUExBQ0VIT0xERVIgfHwgY2ggPT09IFBFUkNFTlRfUExBQ0VIT0xERVIpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzeW1ib2w7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gY2g7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY3VycmVuY3lVbml0UGF0dGVybihpbmZvLCB2YWx1ZSkge1xuICAgIGNvbnN0IGN1cnJlbmN5SW5mbyA9IGluZm8ubnVtYmVycy5jdXJyZW5jeTtcbiAgICBsZXQgcGF0dGVybiA9IHZhbHVlICE9PSAxID8gY3VycmVuY3lJbmZvW1widW5pdFBhdHRlcm4tY291bnQtb3RoZXJcIl0gOiBjdXJyZW5jeUluZm9bXCJ1bml0UGF0dGVybi1jb3VudC1vbmVcIl07XG4gICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKE5VTUJFUl9QTEFDRUhPTERFUiwgYC0keyBOVU1CRVJfUExBQ0VIT0xERVIgfWApO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJuO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YW5kYXJkTnVtYmVyRm9ybWF0KG51bWJlciwgb3B0aW9ucywgaW5mbykge1xuICAgIGNvbnN0IHN5bWJvbHMgPSBpbmZvLm51bWJlcnMuc3ltYm9scztcbiAgICBjb25zdCB7IHN0eWxlIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGlzQ3VycmVuY3kgPSBpc0N1cnJlbmN5U3R5bGUoc3R5bGUpO1xuXG4gICAgLy9yZXR1cm4gbnVtYmVyIGluIGV4cG9uZW50aWFsIGZvcm1hdFxuICAgIGlmIChzdHlsZSA9PT0gU0NJRU5USUZJQykge1xuICAgICAgICBsZXQgZXhwb25lbnRpYWwgPSBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyAhPT0gdW5kZWZpbmVkID8gbnVtYmVyLnRvRXhwb25lbnRpYWwob3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMpIDogbnVtYmVyLnRvRXhwb25lbnRpYWwoKTtcbiAgICAgICAgcmV0dXJuIGV4cG9uZW50aWFsLnJlcGxhY2UoUE9JTlQsIHN5bWJvbHMuZGVjaW1hbCk7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gbnVtYmVyO1xuICAgIGxldCBzeW1ib2w7XG5cbiAgICBpZiAoaXNDdXJyZW5jeSkge1xuICAgICAgICBvcHRpb25zLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN5bWJvbCA9IGZvcm1hdEN1cnJlbmN5U3ltYm9sKGluZm8sIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChzdHlsZSA9PT0gUEVSQ0VOVCkge1xuICAgICAgICB2YWx1ZSAqPSAxMDA7XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbHMucGVyY2VudFNpZ247XG4gICAgfVxuXG4gICAgY29uc3QgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHMsIG1heGltdW1GcmFjdGlvbkRpZ2l0cyB9ID0gZnJhY3Rpb25PcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgdmFsdWUgPSByb3VuZCh2YWx1ZSwgbWF4aW11bUZyYWN0aW9uRGlnaXRzKTtcblxuICAgIGNvbnN0IG5lZ2F0aXZlID0gdmFsdWUgPCAwO1xuXG4gICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChQT0lOVCk7XG5cbiAgICBsZXQgaW50ZWdlciA9IHBhcnRzWzBdO1xuICAgIGxldCBmcmFjdGlvbiA9IHBhZChwYXJ0c1sxXSA/IHBhcnRzWzFdLnJlcGxhY2UodHJhaWxpbmdaZXJvUmVnZXgsIEVNUFRZKSA6IEVNUFRZLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHMsIHRydWUpO1xuXG4gICAgLy9leGNsdWRlIFwiLVwiIGlmIG51bWJlciBpcyBuZWdhdGl2ZS5cbiAgICBpZiAobmVnYXRpdmUpIHtcbiAgICAgICAgaW50ZWdlciA9IGludGVnZXIuc3Vic3RyaW5nKDEpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1pbmltdW1JbnRlZ2VyRGlnaXRzKSB7XG4gICAgICAgIGludGVnZXIgPSBwYWQoaW50ZWdlciwgb3B0aW9ucy5taW5pbXVtSW50ZWdlckRpZ2l0cyk7XG4gICAgfVxuXG4gICAgbGV0IGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy51c2VHcm91cGluZyAhPT0gZmFsc2UgPyBncm91cEludGVnZXIoaW50ZWdlciwgMCwgaW50ZWdlci5sZW5ndGgsIG9wdGlvbnMsIGluZm8pIDogaW50ZWdlcjtcblxuICAgIGlmIChmcmFjdGlvbikge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZSArPSBzeW1ib2xzLmRlY2ltYWwgKyBmcmFjdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgcGF0dGVybjtcblxuICAgIGlmIChpc0N1cnJlbmN5ICYmIG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID09PSBcIm5hbWVcIikge1xuICAgICAgICBwYXR0ZXJuID0gY3VycmVuY3lVbml0UGF0dGVybihpbmZvLCBudW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm5zID0gb3B0aW9ucy5wYXR0ZXJucztcbiAgICAgICAgcGF0dGVybiA9IG5lZ2F0aXZlID8gcGF0dGVybnNbMV0gfHwgKFwiLVwiICsgcGF0dGVybnNbMF0pIDogcGF0dGVybnNbMF07XG4gICAgfVxuXG4gICAgaWYgKHBhdHRlcm4gPT09IE5VTUJFUl9QTEFDRUhPTERFUiAmJiAhbmVnYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGFwcGx5UGF0dGVybihmb3JtYXR0ZWRWYWx1ZSwgcGF0dGVybiwgc3ltYm9sKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgQ1VSUkVOQ1ksIFBFUkNFTlQsIExJU1RfU0VQQVJBVE9SLCBHUk9VUF9TRVBBUkFUT1IsIENVUlJFTkNZX1BMQUNFSE9MREVSLCBQRVJDRU5UX1BMQUNFSE9MREVSLCBQT0lOVCwgRU1QVFkgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBmb3JtYXRDdXJyZW5jeVN5bWJvbCBmcm9tICcuL2Zvcm1hdC1jdXJyZW5jeS1zeW1ib2wnO1xuaW1wb3J0IGdyb3VwSW50ZWdlciBmcm9tICcuL2dyb3VwLWludGVnZXInO1xuaW1wb3J0IHJvdW5kIGZyb20gJy4uL2NvbW1vbi9yb3VuZCc7XG5cbmNvbnN0IFBMQUNFSE9MREVSID0gXCJfXz8/X19cIjtcblxuY29uc3QgU0hBUlAgPSBcIiNcIjtcbmNvbnN0IFpFUk8gPSBcIjBcIjtcblxuY29uc3QgbGl0ZXJhbFJlZ0V4cCA9IC8oXFxcXC4pfChbJ11bXiddKlsnXT8pfChbXCJdW15cIl0qW1wiXT8pL2c7XG5jb25zdCB0cmFpbGluZ1plcm9zUmVnRXhwID0gLyhcXC4oPzpbMC05XSpbMS05XSk/KTArJC9nO1xuY29uc3QgdHJhaWxpbmdQb2ludFJlZ0V4cCA9IC9cXC4kLztcbmNvbnN0IGNvbW1hUmVnRXhwID0gL1xcLC9nO1xuXG5mdW5jdGlvbiBzZXRGb3JtYXRMaXRlcmFscyhmb3JtYXRPcHRpb25zKSB7XG4gICAgbGV0IGZvcm1hdCA9IGZvcm1hdE9wdGlvbnMuZm9ybWF0O1xuICAgIGlmIChmb3JtYXQuaW5kZXhPZihcIidcIikgPiAtMSB8fCBmb3JtYXQuaW5kZXhPZihcIlxcXCJcIikgPiAtMSB8fCBmb3JtYXQuaW5kZXhPZihcIlxcXFxcIikgPiAtMSkge1xuICAgICAgICBjb25zdCBsaXRlcmFscyA9IGZvcm1hdE9wdGlvbnMubGl0ZXJhbHMgPSBbXTtcbiAgICAgICAgZm9ybWF0T3B0aW9ucy5mb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsaXRlcmFsUmVnRXhwLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgY29uc3QgcXVvdGVDaGFyID0gbWF0Y2guY2hhckF0KDApLnJlcGxhY2UoXCJcXFxcXCIsIEVNUFRZKTtcbiAgICAgICAgICAgIGNvbnN0IGxpdGVyYWwgPSBtYXRjaC5zbGljZSgxKS5yZXBsYWNlKHF1b3RlQ2hhciwgRU1QVFkpO1xuXG4gICAgICAgICAgICBsaXRlcmFscy5wdXNoKGxpdGVyYWwpO1xuXG4gICAgICAgICAgICByZXR1cm4gUExBQ0VIT0xERVI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdHJpbVRyYWlsaW5nWmVyb3ModmFsdWUsIGxhc3RaZXJvKSB7XG4gICAgbGV0IHRyaW1SZWdleDtcblxuICAgIGlmIChsYXN0WmVybyA9PT0gMCkge1xuICAgICAgICB0cmltUmVnZXggPSB0cmFpbGluZ1plcm9zUmVnRXhwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoYChcXFxcLlswLTldeyR7IGxhc3RaZXJvIH19WzEtOV0qKTArJGAsICdnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodHJpbVJlZ2V4LCAnJDEnKS5yZXBsYWNlKHRyYWlsaW5nUG9pbnRSZWdFeHAsIEVNUFRZKTtcbn1cblxuZnVuY3Rpb24gcm91bmROdW1iZXIoZm9ybWF0T3B0aW9ucykge1xuICAgIGxldCB7IG51bWJlciwgZm9ybWF0IH0gPSBmb3JtYXRPcHRpb25zO1xuICAgIGxldCBkZWNpbWFsSW5kZXggPSBmb3JtYXQuaW5kZXhPZihQT0lOVCk7XG5cbiAgICBpZiAoZGVjaW1hbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB6ZXJvSW5kZXggPSBmb3JtYXQubGFzdEluZGV4T2YoWkVSTykgLSBkZWNpbWFsSW5kZXg7XG4gICAgICAgIGNvbnN0IHNoYXJwSW5kZXggPSBmb3JtYXQubGFzdEluZGV4T2YoU0hBUlApIC0gZGVjaW1hbEluZGV4O1xuICAgICAgICBjb25zdCBoYXNaZXJvID0gemVyb0luZGV4ID4gLTE7XG4gICAgICAgIGNvbnN0IGhhc1NoYXJwID0gc2hhcnBJbmRleCA+IC0xO1xuICAgICAgICBsZXQgZnJhY3Rpb24gPSBudW1iZXIudG9TdHJpbmcoKS5zcGxpdChcImVcIik7XG5cbiAgICAgICAgaWYgKGZyYWN0aW9uWzFdKSB7XG4gICAgICAgICAgICBmcmFjdGlvbiA9IHJvdW5kKG51bWJlciwgTWF0aC5hYnMoZnJhY3Rpb25bMV0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyYWN0aW9uID0gZnJhY3Rpb25bMF07XG4gICAgICAgIH1cbiAgICAgICAgZnJhY3Rpb24gPSBmcmFjdGlvbi5zcGxpdChQT0lOVClbMV0gfHwgRU1QVFk7XG5cbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IGZyYWN0aW9uLmxlbmd0aDtcbiAgICAgICAgbGV0IHRyYWlsaW5nWmVyb3MgPSAtMTtcblxuICAgICAgICBpZiAoIWhhc1plcm8gJiYgIWhhc1NoYXJwKSB7XG4gICAgICAgICAgICBmb3JtYXRPcHRpb25zLmZvcm1hdCA9IGZvcm1hdC5zdWJzdHJpbmcoMCwgZGVjaW1hbEluZGV4KSArIGZvcm1hdC5zdWJzdHJpbmcoZGVjaW1hbEluZGV4ICsgMSk7XG4gICAgICAgICAgICBkZWNpbWFsSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHByZWNpc2lvbiA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzWmVybyAmJiB6ZXJvSW5kZXggPiBzaGFycEluZGV4KSB7XG4gICAgICAgICAgICBwcmVjaXNpb24gPSB6ZXJvSW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hhcnBJbmRleCA+IHplcm9JbmRleCkge1xuICAgICAgICAgICAgaWYgKGhhc1NoYXJwICYmIHByZWNpc2lvbiA+IHNoYXJwSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSBzaGFycEluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNaZXJvICYmIHByZWNpc2lvbiA8IHplcm9JbmRleCkge1xuICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IHplcm9JbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJhaWxpbmdaZXJvcyA9IGhhc1plcm8gPyB6ZXJvSW5kZXggOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZWNpc2lvbiA+IC0xKSB7XG4gICAgICAgICAgICBudW1iZXIgPSByb3VuZChudW1iZXIsIHByZWNpc2lvbik7XG4gICAgICAgICAgICBpZiAodHJhaWxpbmdaZXJvcyA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyID0gdHJpbVRyYWlsaW5nWmVyb3MobnVtYmVyLCB0cmFpbGluZ1plcm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG51bWJlciA9IHJvdW5kKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdE9wdGlvbnMubmVnYXRpdmUgJiYgKG51bWJlciAqIC0xKSA+PSAwKSB7XG4gICAgICAgIGZvcm1hdE9wdGlvbnMubmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3JtYXRPcHRpb25zLm51bWJlciA9IG51bWJlcjtcbiAgICBmb3JtYXRPcHRpb25zLmRlY2ltYWxJbmRleCA9IGRlY2ltYWxJbmRleDtcbn1cblxuZnVuY3Rpb24gaXNDb25zdGFudEZvcm1hdChmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0LmluZGV4T2YoU0hBUlApID09PSAtMSAmJiBmb3JtYXQuaW5kZXhPZihaRVJPKSA9PT0gLTE7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlU3BlY2lmaWNGb3JtYXQoZm9ybWF0T3B0aW9ucykge1xuICAgIGxldCB7IG51bWJlciwgZm9ybWF0IH0gPSBmb3JtYXRPcHRpb25zO1xuICAgIGZvcm1hdCA9IGZvcm1hdC5zcGxpdChMSVNUX1NFUEFSQVRPUik7XG4gICAgaWYgKGZvcm1hdE9wdGlvbnMubmVnYXRpdmUgJiYgZm9ybWF0WzFdKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdFsxXTtcbiAgICAgICAgZm9ybWF0T3B0aW9ucy5oYXNOZWdhdGl2ZUZvcm1hdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgICAgY29uc3QgemVyb0Zvcm1hdCA9IGZvcm1hdFsyXTtcbiAgICAgICAgZm9ybWF0ID0gemVyb0Zvcm1hdCB8fCBmb3JtYXRbMF07XG4gICAgICAgIGlmICh6ZXJvRm9ybWF0ICYmIGlzQ29uc3RhbnRGb3JtYXQoemVyb0Zvcm1hdCkpIHtcbiAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMuY29uc3RhbnQgPSB6ZXJvRm9ybWF0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0WzBdO1xuICAgIH1cblxuICAgIGZvcm1hdE9wdGlvbnMuZm9ybWF0ID0gZm9ybWF0O1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZU9wdGlvbnMoZm9ybWF0T3B0aW9ucywgaW5mbykge1xuICAgIGNvbnN0IGZvcm1hdCA9IGZvcm1hdE9wdGlvbnMuZm9ybWF0O1xuXG4gICAgLy9tdWx0aXBseSBudW1iZXIgaWYgdGhlIGZvcm1hdCBoYXMgcGVyY2VudFxuICAgIGlmIChmb3JtYXQuaW5kZXhPZihQRVJDRU5UX1BMQUNFSE9MREVSKSAhPT0gLTEpIHtcbiAgICAgICAgZm9ybWF0T3B0aW9ucy5zdHlsZSA9IFBFUkNFTlQ7XG4gICAgICAgIGZvcm1hdE9wdGlvbnMuc3ltYm9sID0gaW5mby5udW1iZXJzLnN5bWJvbHMucGVyY2VudFNpZ247XG4gICAgICAgIGZvcm1hdE9wdGlvbnMubnVtYmVyICo9IDEwMDtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoQ1VSUkVOQ1lfUExBQ0VIT0xERVIpICE9PSAtMSkge1xuICAgICAgICBmb3JtYXRPcHRpb25zLnN0eWxlID0gQ1VSUkVOQ1k7XG4gICAgICAgIGZvcm1hdE9wdGlvbnMuc3ltYm9sID0gZm9ybWF0Q3VycmVuY3lTeW1ib2woaW5mbyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRHcm91cE9wdGlvbnMoZm9ybWF0T3B0aW9ucykge1xuICAgIGZvcm1hdE9wdGlvbnMuaGFzR3JvdXAgPSBmb3JtYXRPcHRpb25zLmZvcm1hdC5pbmRleE9mKEdST1VQX1NFUEFSQVRPUikgPiAtMTtcbiAgICBpZiAoZm9ybWF0T3B0aW9ucy5oYXNHcm91cCkge1xuICAgICAgICBmb3JtYXRPcHRpb25zLmZvcm1hdCA9IGZvcm1hdE9wdGlvbnMuZm9ybWF0LnJlcGxhY2UoY29tbWFSZWdFeHAsIEVNUFRZKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlaG9sZGVySW5kZXgoaW5kZXgxLCBpbmRleDIsIHN0YXJ0KSB7XG4gICAgbGV0IGluZGV4O1xuICAgIGlmIChpbmRleDEgPT09IC0xICYmIGluZGV4MiAhPT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleDI7XG4gICAgfSBlbHNlIGlmIChpbmRleDEgIT09IC0xICYmIGluZGV4MiA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBzdGFydCA/IE1hdGgubWluKGluZGV4MSwgaW5kZXgyKSA6IE1hdGgubWF4KGluZGV4MSwgaW5kZXgyKTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiBzZXRQbGFjZWhvbGRlckluZGljZXMoZm9ybWF0T3B0aW9ucykge1xuICAgIGNvbnN0IGZvcm1hdCA9IGZvcm1hdE9wdGlvbnMuZm9ybWF0O1xuICAgIGxldCBzaGFycEluZGV4ID0gZm9ybWF0LmluZGV4T2YoU0hBUlApO1xuICAgIGxldCB6ZXJvSW5kZXggPSBmb3JtYXQuaW5kZXhPZihaRVJPKTtcblxuICAgIGxldCBzdGFydCA9IHBsYWNlaG9sZGVySW5kZXgoc2hhcnBJbmRleCwgemVyb0luZGV4LCB0cnVlKTtcblxuICAgIHNoYXJwSW5kZXggPSBmb3JtYXQubGFzdEluZGV4T2YoU0hBUlApO1xuICAgIHplcm9JbmRleCA9IGZvcm1hdC5sYXN0SW5kZXhPZihaRVJPKTtcblxuICAgIGxldCBlbmQgPSBwbGFjZWhvbGRlckluZGV4KHNoYXJwSW5kZXgsIHplcm9JbmRleCk7XG5cbiAgICBpZiAoc3RhcnQgPT09IGZvcm1hdC5sZW5ndGgpIHtcbiAgICAgICAgZW5kID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgZm9ybWF0T3B0aW9ucy5zdGFydCA9IHN0YXJ0O1xuICAgIGZvcm1hdE9wdGlvbnMuZW5kID0gZW5kO1xuICAgIGZvcm1hdE9wdGlvbnMubGFzdFplcm9JbmRleCA9IHplcm9JbmRleDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0eWxlU3ltYm9scyhudW1iZXIsIHN0eWxlLCBzeW1ib2wpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVtYmVyO1xuICAgIGlmIChzdHlsZSA9PT0gQ1VSUkVOQ1kgfHwgc3R5bGUgPT09IFBFUkNFTlQpIHtcbiAgICAgICAgcmVzdWx0ID0gRU1QVFk7XG4gICAgICAgIGZvciAobGV0IGlkeCA9IDAsIGxlbmd0aCA9IG51bWJlci5sZW5ndGg7IGlkeCA8IGxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgIGxldCBjaCA9IG51bWJlci5jaGFyQXQoaWR4KTtcbiAgICAgICAgICAgIHJlc3VsdCArPSAoY2ggPT09IENVUlJFTkNZX1BMQUNFSE9MREVSIHx8IGNoID09PSBQRVJDRU5UX1BMQUNFSE9MREVSKSA/IHN5bWJvbCA6IGNoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VMaXRlcmFscyhudW1iZXIsIGxpdGVyYWxzKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bWJlcjtcbiAgICBpZiAobGl0ZXJhbHMpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbGl0ZXJhbHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShQTEFDRUhPTERFUiwgbGl0ZXJhbHNbaWR4XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVBsYWNlSG9sZGVycyhmb3JtYXRPcHRpb25zLCBpbmZvKSB7XG4gICAgY29uc3QgeyBzdGFydCwgZW5kLCBuZWdhdGl2ZSwgZm9ybWF0LCBkZWNpbWFsSW5kZXgsIGxhc3RaZXJvSW5kZXgsIGhhc05lZ2F0aXZlRm9ybWF0LCBoYXNHcm91cCB9ID0gZm9ybWF0T3B0aW9ucztcbiAgICBsZXQgbnVtYmVyID0gZm9ybWF0T3B0aW9ucy5udW1iZXI7XG4gICAgY29uc3QgdmFsdWUgPSBudW1iZXIudG9TdHJpbmcoKS5zcGxpdChQT0lOVCk7XG4gICAgY29uc3QgbGVuZ3RoID0gZm9ybWF0Lmxlbmd0aDtcbiAgICBjb25zdCBpbnRlZ2VyID0gdmFsdWVbMF07XG4gICAgY29uc3QgZnJhY3Rpb24gPSB2YWx1ZVsxXSB8fCBFTVBUWTtcbiAgICBjb25zdCBpbnRlZ2VyTGVuZ3RoID0gaW50ZWdlci5sZW5ndGg7XG4gICAgbGV0IHJlcGxhY2VtZW50ID0gRU1QVFk7XG5cbiAgICBudW1iZXIgPSBmb3JtYXQuc3Vic3RyaW5nKDAsIHN0YXJ0KTtcblxuICAgIGlmIChuZWdhdGl2ZSAmJiAhaGFzTmVnYXRpdmVGb3JtYXQpIHtcbiAgICAgICAgbnVtYmVyICs9IFwiLVwiO1xuICAgIH1cblxuICAgIGZvciAobGV0IGlkeCA9IHN0YXJ0OyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGxldCBjaCA9IGZvcm1hdC5jaGFyQXQoaWR4KTtcblxuICAgICAgICBpZiAoZGVjaW1hbEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaWYgKGVuZCAtIGlkeCA8IGludGVnZXJMZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIG51bWJlciArPSBpbnRlZ2VyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxhc3RaZXJvSW5kZXggIT09IC0xICYmIGxhc3RaZXJvSW5kZXggPCBpZHgpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IEVNUFRZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKGRlY2ltYWxJbmRleCAtIGlkeCkgPD0gaW50ZWdlckxlbmd0aCAmJiBkZWNpbWFsSW5kZXggLSBpZHggPiAtMSkge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBpbnRlZ2VyO1xuICAgICAgICAgICAgICAgIGlkeCA9IGRlY2ltYWxJbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlY2ltYWxJbmRleCA9PT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IChmcmFjdGlvbiA/IGluZm8ubnVtYmVycy5zeW1ib2xzLmRlY2ltYWwgOiBFTVBUWSkgKyBmcmFjdGlvbjtcbiAgICAgICAgICAgICAgICBpZHggKz0gZW5kIC0gZGVjaW1hbEluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaCA9PT0gWkVSTykge1xuICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBjaDtcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gU0hBUlApIHtcbiAgICAgICAgICAgIG51bWJlciArPSByZXBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNHcm91cCkge1xuICAgICAgICBudW1iZXIgPSBncm91cEludGVnZXIobnVtYmVyLCBzdGFydCArIChuZWdhdGl2ZSAmJiAhaGFzTmVnYXRpdmVGb3JtYXQgPyAxIDogMCksIE1hdGgubWF4KGVuZCwgKGludGVnZXJMZW5ndGggKyBzdGFydCkpLCBpbmZvLm51bWJlcnMuZGVjaW1hbCwgaW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKGVuZCA+PSBzdGFydCkge1xuICAgICAgICBudW1iZXIgKz0gZm9ybWF0LnN1YnN0cmluZyhlbmQgKyAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBseUN1c3RvbUZvcm1hdChmb3JtYXRPcHRpb25zLCBpbmZvKSB7XG4gICAgbGV0IG51bWJlciA9IGZvcm1hdE9wdGlvbnMubnVtYmVyO1xuICAgIGlmIChmb3JtYXRPcHRpb25zLnN0YXJ0ICE9PSAtMSkge1xuICAgICAgICBudW1iZXIgPSByZXBsYWNlUGxhY2VIb2xkZXJzKGZvcm1hdE9wdGlvbnMsIGluZm8pO1xuICAgICAgICBudW1iZXIgPSByZXBsYWNlU3R5bGVTeW1ib2xzKG51bWJlciwgZm9ybWF0T3B0aW9ucy5zdHlsZSwgZm9ybWF0T3B0aW9ucy5zeW1ib2wpO1xuICAgICAgICBudW1iZXIgPSByZXBsYWNlTGl0ZXJhbHMobnVtYmVyLCBmb3JtYXRPcHRpb25zLmxpdGVyYWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXN0b21OdW1iZXJGb3JtYXQobnVtYmVyLCBmb3JtYXQsIGluZm8pIHtcbiAgICBjb25zdCBmb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBuZWdhdGl2ZTogbnVtYmVyIDwgMCxcbiAgICAgICAgbnVtYmVyOiBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICBmb3JtYXQ6IGZvcm1hdFxuICAgIH07XG5cbiAgICBzZXRWYWx1ZVNwZWNpZmljRm9ybWF0KGZvcm1hdE9wdGlvbnMpO1xuXG4gICAgaWYgKGZvcm1hdE9wdGlvbnMuY29uc3RhbnQpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE9wdGlvbnMuY29uc3RhbnQ7XG4gICAgfVxuXG4gICAgc2V0Rm9ybWF0TGl0ZXJhbHMoZm9ybWF0T3B0aW9ucyk7XG4gICAgc2V0U3R5bGVPcHRpb25zKGZvcm1hdE9wdGlvbnMsIGluZm8pO1xuICAgIHNldEdyb3VwT3B0aW9ucyhmb3JtYXRPcHRpb25zKTtcbiAgICByb3VuZE51bWJlcihmb3JtYXRPcHRpb25zKTtcbiAgICBzZXRQbGFjZWhvbGRlckluZGljZXMoZm9ybWF0T3B0aW9ucyk7XG5cbiAgICByZXR1cm4gYXBwbHlDdXN0b21Gb3JtYXQoZm9ybWF0T3B0aW9ucywgaW5mbyk7XG59IiwiaW1wb3J0IHsgQ1VSUkVOQ1ksIEFDQ09VTlRJTkcsIERFQ0lNQUwsIFBFUkNFTlQsIFNDSUVOVElGSUMgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuLi9jb21tb24vaXMtc3RyaW5nJztcblxuY29uc3Qgc3RhbmRhcmRGb3JtYXRSZWdFeHAgPSAvXihufGN8cHxlfGEpKFxcZCopJC9pO1xuXG5mdW5jdGlvbiBzdGFuZGFyZEZvcm1hdE9wdGlvbnMoZm9ybWF0KSB7XG4gICAgY29uc3QgZm9ybWF0QW5kUHJlY2lzaW9uID0gc3RhbmRhcmRGb3JtYXRSZWdFeHAuZXhlYyhmb3JtYXQpO1xuXG4gICAgaWYgKGZvcm1hdEFuZFByZWNpc2lvbikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgc3R5bGU6IERFQ0lNQUxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc3R5bGUgPSBmb3JtYXRBbmRQcmVjaXNpb25bMV0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoc3R5bGUgPT09IFwiY1wiKSB7XG4gICAgICAgICAgICBvcHRpb25zLnN0eWxlID0gQ1VSUkVOQ1k7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUgPT09IFwiYVwiKSB7XG4gICAgICAgICAgICBvcHRpb25zLnN0eWxlID0gQUNDT1VOVElORztcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZSA9PT0gXCJwXCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGUgPSBQRVJDRU5UO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlID09PSBcImVcIikge1xuICAgICAgICAgICAgb3B0aW9ucy5zdHlsZSA9IFNDSUVOVElGSUM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybWF0QW5kUHJlY2lzaW9uWzJdKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IG9wdGlvbnMubWF4aW11bUZyYWN0aW9uRGlnaXRzID0gcGFyc2VJbnQoZm9ybWF0QW5kUHJlY2lzaW9uWzJdLCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE9wdGlvbnMoZm9ybWF0KSB7XG4gICAgbGV0IG9wdGlvbnM7XG4gICAgaWYgKGlzU3RyaW5nKGZvcm1hdCkpIHtcbiAgICAgICAgb3B0aW9ucyA9IHN0YW5kYXJkRm9ybWF0T3B0aW9ucyhmb3JtYXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59IiwiaW1wb3J0IHsgbG9jYWxlSW5mbyB9IGZyb20gJy4uL2NsZHInO1xuaW1wb3J0IHsgREVDSU1BTCwgREVGQVVMVF9MT0NBTEUsIE5VTUJFUl9QTEFDRUhPTERFUiwgRU1QVFkgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBzdGFuZGFyZE51bWJlckZvcm1hdCBmcm9tICcuL3N0YW5kYXJkLW51bWJlci1mb3JtYXQnO1xuaW1wb3J0IGN1c3RvbU51bWJlckZvcm1hdCBmcm9tICcuL2N1c3RvbS1udW1iZXItZm9ybWF0JztcbmltcG9ydCBmb3JtYXRPcHRpb25zIGZyb20gJy4vZm9ybWF0LW9wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyLCBmb3JtYXQgPSBOVU1CRVJfUExBQ0VIT0xERVIsIGxvY2FsZSA9IERFRkFVTFRfTE9DQUxFKSB7XG4gICAgaWYgKG51bWJlciA9PT0gdW5kZWZpbmVkIHx8IG51bWJlciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmZvID0gbG9jYWxlSW5mbyhsb2NhbGUpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBmb3JtYXRPcHRpb25zKGZvcm1hdCk7XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gb3B0aW9ucy5zdHlsZSB8fCBERUNJTUFMO1xuICAgICAgICByZXN1bHQgPSBzdGFuZGFyZE51bWJlckZvcm1hdChudW1iZXIsIE9iamVjdC5hc3NpZ24oe30sIGluZm8ubnVtYmVyc1tzdHlsZV0sIG9wdGlvbnMpLCBpbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBjdXN0b21OdW1iZXJGb3JtYXQobnVtYmVyLCBmb3JtYXQsIGluZm8pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG59IiwiaW1wb3J0IHsgbG9jYWxlSW5mbywgbG9jYWxlQ3VycmVuY3ksIGN1cnJlbmN5RGlzcGxheXMgfSBmcm9tICcuLi9jbGRyJztcbmltcG9ydCB7IFBFUkNFTlQsIE5VTUJFUl9QTEFDRUhPTERFUiwgQ1VSUkVOQ1lfUExBQ0VIT0xERVIsIERFRkFVTFRfTE9DQUxFLCBFTVBUWSwgUE9JTlQgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi9jb21tb24vaXMtbnVtYmVyJztcbmltcG9ydCBpc0N1cnJlbmN5U3R5bGUgZnJvbSAnLi9pcy1jdXJyZW5jeS1zdHlsZSc7XG5pbXBvcnQgZm9ybWF0T3B0aW9ucyBmcm9tICcuL2Zvcm1hdC1vcHRpb25zJztcblxuY29uc3QgZXhwb25lbnRSZWdFeHAgPSAvW2VFXVtcXC0rXT9bMC05XSsvO1xuY29uc3Qgbm9uQnJlYWtpbmdTcGFjZVJlZ0V4cCA9IC9cXHUwMEEwL2c7XG5cbmZ1bmN0aW9uIGNsZWFuTmVnYXRpdmVQYXR0ZXJuKG51bWJlciwgcGF0dGVybnMpIHtcbiAgICBpZiAocGF0dGVybnMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IChwYXR0ZXJuc1sxXSB8fCBFTVBUWSkucmVwbGFjZShDVVJSRU5DWV9QTEFDRUhPTERFUiwgRU1QVFkpLnNwbGl0KE5VTUJFUl9QTEFDRUhPTERFUik7XG4gICAgICAgIGlmIChudW1iZXIuaW5kZXhPZihwYXJ0c1swXSkgPiAtMSAmJiBudW1iZXIuaW5kZXhPZihwYXJ0c1sxXSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlci5yZXBsYWNlKHBhcnRzWzBdLCBFTVBUWSkucmVwbGFjZShwYXJ0c1sxXSwgRU1QVFkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbkN1cnJlbmN5TnVtYmVyKHZhbHVlLCBpbmZvLCBmb3JtYXQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZm9ybWF0T3B0aW9ucyhmb3JtYXQpIHx8IHt9O1xuICAgIGxldCBpc0N1cnJlbmN5ID0gaXNDdXJyZW5jeVN0eWxlKG9wdGlvbnMuc3R5bGUpO1xuICAgIGxldCBudW1iZXIgPSB2YWx1ZTtcbiAgICBsZXQgbmVnYXRpdmU7XG5cbiAgICBjb25zdCBjdXJyZW5jeSA9IG9wdGlvbnMuY3VycmVuY3kgfHwgbG9jYWxlQ3VycmVuY3koaW5mbywgaXNDdXJyZW5jeSk7XG5cbiAgICBpZiAoY3VycmVuY3kpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheXMgPSBjdXJyZW5jeURpc3BsYXlzKGluZm8sIGN1cnJlbmN5LCBpc0N1cnJlbmN5KTtcbiAgICAgICAgaWYgKGRpc3BsYXlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBkaXNwbGF5cy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXkgPSBkaXNwbGF5c1tpZHhdO1xuICAgICAgICAgICAgICAgIGlmIChudW1iZXIuaW5jbHVkZXMoZGlzcGxheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoZGlzcGxheSwgRU1QVFkpO1xuICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ3VycmVuY3kpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuTnVtYmVyID0gY2xlYW5OZWdhdGl2ZVBhdHRlcm4obnVtYmVyLCBpbmZvLm51bWJlcnMuY3VycmVuY3kucGF0dGVybnMpIHx8XG4gICAgICAgICAgICAgICAgY2xlYW5OZWdhdGl2ZVBhdHRlcm4obnVtYmVyLCBpbmZvLm51bWJlcnMuYWNjb3VudGluZy5wYXR0ZXJucyk7XG5cbiAgICAgICAgICAgIGlmIChjbGVhbk51bWJlcikge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBudW1iZXIgPSBjbGVhbk51bWJlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlTnVtYmVyKHZhbHVlLCBsb2NhbGUgPSBERUZBVUxUX0xPQ0FMRSwgZm9ybWF0ID0ge30pIHtcbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGluZm8gPSBsb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgY29uc3Qgc3ltYm9scyA9IGluZm8ubnVtYmVycy5zeW1ib2xzO1xuXG4gICAgbGV0IG51bWJlciA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgbGV0IGlzUGVyY2VudDtcblxuICAgIGlmIChleHBvbmVudFJlZ0V4cC50ZXN0KG51bWJlcikpIHtcbiAgICAgICAgbnVtYmVyID0gcGFyc2VGbG9hdChudW1iZXIucmVwbGFjZShzeW1ib2xzLmRlY2ltYWwsIFBPSU5UKSk7XG4gICAgICAgIHJldHVybiBpc05hTihudW1iZXIpID8gbnVsbCA6IG51bWJlcjtcbiAgICB9XG5cbiAgICBjb25zdCBuZWdhdGl2ZVNpZ25JbmRleCA9IG51bWJlci5pbmRleE9mKFwiLVwiKTtcbiAgICBpZiAobmVnYXRpdmVTaWduSW5kZXggPiAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBpc05lZ2F0aXZlID0gbmVnYXRpdmVTaWduSW5kZXggPiAtMTtcbiAgICBjb25zdCB7IG5lZ2F0aXZlOiBuZWdhdGl2ZUN1cnJlbmN5LCBudW1iZXI6IG5ld051bWJlciB9ID0gY2xlYW5DdXJyZW5jeU51bWJlcihudW1iZXIsIGluZm8sIGZvcm1hdCk7XG5cbiAgICBudW1iZXIgPSBuZXdOdW1iZXI7XG4gICAgaXNOZWdhdGl2ZSA9IG5lZ2F0aXZlQ3VycmVuY3kgIT09IHVuZGVmaW5lZCA/IG5lZ2F0aXZlQ3VycmVuY3kgOiBpc05lZ2F0aXZlO1xuXG4gICAgaWYgKGZvcm1hdC5zdHlsZSA9PT0gUEVSQ0VOVCB8fCBudW1iZXIuaW5kZXhPZihzeW1ib2xzLnBlcmNlbnRTaWduKSA+IC0xKSB7XG4gICAgICAgIG51bWJlciA9IG51bWJlci5yZXBsYWNlKHN5bWJvbHMucGVyY2VudFNpZ24sIEVNUFRZKTtcbiAgICAgICAgaXNQZXJjZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBudW1iZXIgPSBudW1iZXIucmVwbGFjZShcIi1cIiwgRU1QVFkpXG4gICAgICAgICAgLnJlcGxhY2Uobm9uQnJlYWtpbmdTcGFjZVJlZ0V4cCwgXCIgXCIpXG4gICAgICAgICAgLnNwbGl0KHN5bWJvbHMuZ3JvdXAucmVwbGFjZShub25CcmVha2luZ1NwYWNlUmVnRXhwLCBcIiBcIikpLmpvaW4oRU1QVFkpXG4gICAgICAgICAgLnJlcGxhY2Uoc3ltYm9scy5kZWNpbWFsLCBQT0lOVCk7XG5cbiAgICBudW1iZXIgPSBwYXJzZUZsb2F0KG51bWJlcik7XG5cbiAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICBudW1iZXIgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoaXNOZWdhdGl2ZSkge1xuICAgICAgICBudW1iZXIgKj0gLTE7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlciAmJiBpc1BlcmNlbnQpIHtcbiAgICAgICAgbnVtYmVyIC89IDEwMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xufVxuIiwiY29uc3QgZm9ybWF0UmVnRXhwID0gL1xceyhcXGQrKX0vZztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3RyaW5nKGZvcm1hdCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IGFyZ3VtZW50cztcblxuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZShmb3JtYXRSZWdFeHAsIChtYXRjaCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbcGFyc2VJbnQoaW5kZXgsIDEwKSArIDFdO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgZm9ybWF0U3RyaW5nIGZyb20gJy4uL2NvbW1vbi9mb3JtYXQtc3RyaW5nJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuLi9jb21tb24vaXMtc3RyaW5nJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJFTU9WQUxfUEVOQUxUWSA9IDEyMDtcbmNvbnN0IEFERElUSU9OX1BFTkFMVFkgPSAyMDtcbmNvbnN0IExFTkdIVF9ERUxUQSA9IFsgMiwgMSwgNSwgMywgNCBdO1xuY29uc3QgTE9OR19MRVNTX1BFTkFMVFlfREVMVEEgPSAtMjtcbmNvbnN0IFNIT1JUX0xFU1NfUEVOQUxUWV9ERUxUQSA9IC0xO1xuY29uc3QgU0hPUlRfTU9SRV9QRU5BTFRZX0RFTFRBID0gMTtcbmNvbnN0IExPTkdfTU9SRV9QRU5BTFRZX0RFTFRBID0gMjtcblxuY29uc3QgUEVOQUxUSUVTID0ge1xuICAgIFtMT05HX0xFU1NfUEVOQUxUWV9ERUxUQS50b1N0cmluZygpXTogOCxcbiAgICBbU0hPUlRfTEVTU19QRU5BTFRZX0RFTFRBLnRvU3RyaW5nKCldOiA2LFxuICAgIFtMT05HX01PUkVfUEVOQUxUWV9ERUxUQS50b1N0cmluZygpXTogNixcbiAgICBbU0hPUlRfTU9SRV9QRU5BTFRZX0RFTFRBLnRvU3RyaW5nKCldOiAzXG59O1xuXG5jb25zdCBWQUxVRV9GT1JNQVRfTEVOR1RIID0ge1xuICAgIG51bWVyaWM6IDEsXG4gICAgXCIyLWRpZ2l0XCI6IDIsXG4gICAgc2hvcnQ6IDMsXG4gICAgbG9uZzogNCxcbiAgICBuYXJyb3c6IDVcbn07XG5cbmNvbnN0IFRJTUVfU1BFQ0lGSUVSU19SRUdFWCA9IC9baEhtc1N6Wm9PdlZ4WF0vO1xuXG5mdW5jdGlvbiBnZXRIb3VyU3BlY2lmaWVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5ob3VyMTIgPyBcImhcIiA6IFwiSFwiO1xufVxuXG5jb25zdCBEQVRFX09QVElPTlNfTUFQID0gWyB7XG4gICAga2V5OiBcImVyYVwiLFxuICAgIHNwZWNpZmllcjogXCJHXCJcbn0sIHtcbiAgICBrZXk6IFwieWVhclwiLFxuICAgIHNwZWNpZmllcjogXCJ5XCJcbn0sIHtcbiAgICBrZXk6IFwibW9udGhcIixcbiAgICBzcGVjaWZpZXI6IFwiTVwiXG59LCB7XG4gICAga2V5OiBcImRheVwiLFxuICAgIHNwZWNpZmllcjogXCJkXCJcbn0sIHtcbiAgICBrZXk6IFwid2Vla2RheVwiLFxuICAgIHNwZWNpZmllcjogXCJFXCJcbn0sIHtcbiAgICBrZXk6IFwiaG91clwiLFxuICAgIGdldFNwZWNpZmllcjogZ2V0SG91clNwZWNpZmllclxufSwge1xuICAgIGtleTogXCJtaW51dGVcIixcbiAgICBzcGVjaWZpZXI6IFwibVwiXG59LCB7XG4gICAga2V5OiBcInNlY29uZFwiLFxuICAgIHNwZWNpZmllcjogXCJzXCJcbn0sIHtcbiAgICBrZXk6IFwidGltZVpvbmVOYW1lXCIsXG4gICAgc3BlY2lmaWVyOiBcInpcIlxufSBdO1xuXG5jb25zdCBTVEFORF9BTE9ORV9TUEVDSUZJRVJTID0ge1xuICAgIGU6ICdjJyxcbiAgICBFOiAnYycsXG4gICAgTTogJ0wnLFxuICAgIFE6ICdxJ1xufTtcblxuY29uc3Qgc3BlY2lmaWVyc1JlZ2V4ID0ge307XG5jb25zdCByZXNvbHZlZEZvcm1hdHMgPSB7fTtcblxuZnVuY3Rpb24gZ2V0U3BlY2lmaWVyUmVnZXgoc3BlY2lmaWVyKSB7XG4gICAgaWYgKCFzcGVjaWZpZXJzUmVnZXhbc3BlY2lmaWVyXSkge1xuICAgICAgICBzcGVjaWZpZXJzUmVnZXhbc3BlY2lmaWVyXSA9IG5ldyBSZWdFeHAoc3BlY2lmaWVyICsgXCIrXCIpO1xuICAgIH1cbiAgICByZXR1cm4gc3BlY2lmaWVyc1JlZ2V4W3NwZWNpZmllcl07XG59XG5cbmZ1bmN0aW9uIHNrZWxldG9uU3BlY2lmaWVycyhza2VsZXRvbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gc2tlbGV0b24uY2hhckF0KDApO1xuICAgIGxldCBzcGVjaWZpZXIgPSBjdXJyZW50O1xuICAgIGZvciAobGV0IGlkeCA9IDE7IGlkeCA8IHNrZWxldG9uLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IHNrZWxldG9uLmNoYXJBdChpZHgpO1xuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBzcGVjaWZpZXIpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgKz0gY2hhcmFjdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICBjdXJyZW50ID0gc3BlY2lmaWVyID0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaW5kQmVzdE1hdGNoKHNwZWNpZmllcnMsIGF2YWlsYWJsZUZvcm1hdHMpIHtcbiAgICBjb25zdCBzcGVjaWZpZXJzTGVuZ3RoID0gc3BlY2lmaWVycy5sZW5ndGg7XG4gICAgbGV0IG1heFNjb3JlID0gLU51bWJlci5NQVhfVkFMVUU7XG4gICAgbGV0IGJlc3RNYXRjaGVzLCByZXN1bHQ7XG4gICAgZm9yIChsZXQgZm9ybWF0IGluIGF2YWlsYWJsZUZvcm1hdHMpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFtdO1xuICAgICAgICBsZXQgY3VycmVudEZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFwidlwiLCBcInpcIik7XG4gICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHNwZWNpZmllcnNMZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcGVjaWZpZXIgPSBzcGVjaWZpZXJzW2lkeF07XG4gICAgICAgICAgICBsZXQgc3BlY2lmaWVyUmVnZXggPSBnZXRTcGVjaWZpZXJSZWdleChzcGVjaWZpZXJbMF0pO1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gKHNwZWNpZmllclJlZ2V4LmV4ZWMoY3VycmVudEZvcm1hdCkgfHwgW10pWzBdO1xuXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgc2NvcmUgLT0gUkVNT1ZBTF9QRU5BTFRZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Rm9ybWF0ID0gY3VycmVudEZvcm1hdC5yZXBsYWNlKG1hdGNoLCBFTVBUWSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCAhPT0gc3BlY2lmaWVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsdGEgPSBNYXRoLm1heChNYXRoLm1pbihMRU5HSFRfREVMVEFbbWF0Y2gubGVuZ3RoXSAtIExFTkdIVF9ERUxUQVtzcGVjaWZpZXIubGVuZ3RoXSwgMiksIC0yKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gUEVOQUxUSUVTW2RlbHRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG5cbiAgICAgICAgICAgIGlmIChzY29yZSA8IG1heFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudEZvcm1hdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNjb3JlIC09IHNrZWxldG9uU3BlY2lmaWVycyhjdXJyZW50Rm9ybWF0KS5sZW5ndGggKiBBRERJVElPTl9QRU5BTFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjb3JlID4gbWF4U2NvcmUpIHtcbiAgICAgICAgICAgIG1heFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICBiZXN0TWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgICAgICAgICByZXN1bHQgPSBhdmFpbGFibGVGb3JtYXRzW2Zvcm1hdF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcInZcIiwgXCJ6XCIpO1xuXG4gICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgc3BlY2lmaWVyc0xlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoID0gYmVzdE1hdGNoZXNbaWR4XTtcbiAgICAgICAgaWYgKGJlc3RNYXRjaCAmJiBiZXN0TWF0Y2ggIT09IHNwZWNpZmllcnNbaWR4XSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hTcGVjaWZpZXIgPSBiZXN0TWF0Y2hlc1tpZHhdWzBdO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoZ2V0U3BlY2lmaWVyUmVnZXgobWF0Y2hTcGVjaWZpZXIpLCBzcGVjaWZpZXJzW2lkeF0pO1xuICAgICAgICAgICAgaWYgKFNUQU5EX0FMT05FX1NQRUNJRklFUlNbbWF0Y2hTcGVjaWZpZXJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoZ2V0U3BlY2lmaWVyUmVnZXgoU1RBTkRfQUxPTkVfU1BFQ0lGSUVSU1ttYXRjaFNwZWNpZmllcl0pLCBzcGVjaWZpZXJzW2lkeF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FjaGVGb3JtYXQoc2tlbGV0b24sIGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgaWYgKCFyZXNvbHZlZEZvcm1hdHNbbG9jYWxlXSkge1xuICAgICAgICByZXNvbHZlZEZvcm1hdHNbbG9jYWxlXSA9IHt9O1xuICAgIH1cbiAgICByZXNvbHZlZEZvcm1hdHNbbG9jYWxlXVtza2VsZXRvbl0gPSBmb3JtYXQ7XG59XG5cblxuZnVuY3Rpb24gc2tlbGV0b25Gb3JtYXQoc2tlbGV0b24sIGluZm8pIHtcbiAgICBjb25zdCBhdmFpbGFibGVGb3JtYXRzID0gaW5mby5jYWxlbmRhci5kYXRlVGltZUZvcm1hdHMuYXZhaWxhYmxlRm9ybWF0cztcbiAgICBpZiAoYXZhaWxhYmxlRm9ybWF0c1tza2VsZXRvbl0pIHtcbiAgICAgICAgcmV0dXJuIGF2YWlsYWJsZUZvcm1hdHNbc2tlbGV0b25dO1xuICAgIH1cbiAgICBpZiAocmVzb2x2ZWRGb3JtYXRzW2luZm8ubmFtZV0gJiYgcmVzb2x2ZWRGb3JtYXRzW2luZm8ubmFtZV1bc2tlbGV0b25dKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlZEZvcm1hdHNbaW5mby5uYW1lXVtza2VsZXRvbl07XG4gICAgfVxuICAgIGNvbnN0IHRpbWVTdGFydEluZGV4ID0gc2tlbGV0b24uc2VhcmNoKFRJTUVfU1BFQ0lGSUVSU19SRUdFWCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodGltZVN0YXJ0SW5kZXggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGVTa2VsZXRvbiA9IHNrZWxldG9uLnN1YnN0cigwLCB0aW1lU3RhcnRJbmRleCk7XG4gICAgICAgIGNvbnN0IHRpbWVTa2VsZXRvbiA9IHNrZWxldG9uLnN1YnN0cih0aW1lU3RhcnRJbmRleCk7XG5cbiAgICAgICAgcmVzdWx0ID0gZm9ybWF0U3RyaW5nKGluZm8uY2FsZW5kYXIuZGF0ZVRpbWVGb3JtYXRzLnNob3J0LCAvL3Nob3VsZCBiZSBkZXRlcmltZWQgYmFzZWQgb24gc3BlY2lmaWVyc1xuICAgICAgICAgICAgYXZhaWxhYmxlRm9ybWF0c1t0aW1lU2tlbGV0b25dIHx8IGZpbmRCZXN0TWF0Y2goc2tlbGV0b25TcGVjaWZpZXJzKHRpbWVTa2VsZXRvbiksIGF2YWlsYWJsZUZvcm1hdHMpLFxuICAgICAgICAgICAgYXZhaWxhYmxlRm9ybWF0c1tkYXRlU2tlbGV0b25dIHx8IGZpbmRCZXN0TWF0Y2goc2tlbGV0b25TcGVjaWZpZXJzKGRhdGVTa2VsZXRvbiksIGF2YWlsYWJsZUZvcm1hdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmaW5kQmVzdE1hdGNoKHNrZWxldG9uU3BlY2lmaWVycyhza2VsZXRvbiksIGF2YWlsYWJsZUZvcm1hdHMpO1xuICAgIH1cblxuICAgIGNhY2hlRm9ybWF0KHNrZWxldG9uLCByZXN1bHQsIGluZm8ubmFtZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2tlbGV0b25Gcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IERBVEVfT1BUSU9OU19NQVAubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gREFURV9PUFRJT05TX01BUFtpZHhdO1xuICAgICAgICBsZXQgZmllbGQgPSBvcHRpb24ua2V5O1xuICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zW2ZpZWxkXTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgc3BjaWZpZXIgPSBvcHRpb24uc3BlY2lmaWVyIHx8IG9wdGlvbi5nZXRTcGVjaWZpZXIob3B0aW9ucyk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChzcGNpZmllci5yZXBlYXQoVkFMVUVfRk9STUFUX0xFTkdUSFt2YWx1ZV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuam9pbihFTVBUWSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVQYXR0ZXJuKGZvcm1hdCwgaW5mbykge1xuICAgIGNvbnN0IGNhbGVuZGFyID0gaW5mby5jYWxlbmRhcjtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChpc1N0cmluZyhmb3JtYXQpKSB7XG4gICAgICAgIGlmIChjYWxlbmRhci5wYXR0ZXJuc1tmb3JtYXRdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjYWxlbmRhci5wYXR0ZXJuc1tmb3JtYXRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZm9ybWF0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICAgICAgaWYgKGZvcm1hdC5wYXR0ZXJuKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0LnBhdHRlcm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2tlbGV0b24gPSBmb3JtYXQuc2tlbGV0b247XG4gICAgICAgIGlmICghc2tlbGV0b24pIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQuZGF0ZXRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmb3JtYXRTdHJpbmcoY2FsZW5kYXIuZGF0ZVRpbWVGb3JtYXRzW2Zvcm1hdC5kYXRldGltZV0sIGNhbGVuZGFyLnRpbWVGb3JtYXRzW2Zvcm1hdC5kYXRldGltZV0sIGNhbGVuZGFyLmRhdGVGb3JtYXRzW2Zvcm1hdC5kYXRldGltZV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQuZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNhbGVuZGFyLmRhdGVGb3JtYXRzW2Zvcm1hdC5kYXRlXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0LnRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxlbmRhci50aW1lRm9ybWF0c1tmb3JtYXQudGltZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNrZWxldG9uID0gc2tlbGV0b25Gcm9tT3B0aW9ucyhmb3JtYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNrZWxldG9uKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBza2VsZXRvbkZvcm1hdChza2VsZXRvbiwgaW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSBjYWxlbmRhci5wYXR0ZXJucy5kO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlTmFtZVR5cGUoZm9ybWF0TGVuZ3RoKSB7XG4gICAgbGV0IG5hbWVUeXBlO1xuICAgIGlmIChmb3JtYXRMZW5ndGggPD0gMykge1xuICAgICAgICBuYW1lVHlwZSA9IFwiYWJicmV2aWF0ZWRcIjtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdExlbmd0aCA9PT0gNCkge1xuICAgICAgICBuYW1lVHlwZSA9IFwid2lkZVwiO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0TGVuZ3RoID09PSA1KSB7XG4gICAgICAgIG5hbWVUeXBlID0gXCJuYXJyb3dcIjtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdExlbmd0aCA9PT0gNikge1xuICAgICAgICBuYW1lVHlwZSA9IFwic2hvcnRcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZVR5cGU7XG59IiwiaW1wb3J0IGRhdGVGb3JtYXROYW1lcyBmcm9tICcuLi9jbGRyL2RhdGUtZm9ybWF0LW5hbWVzJztcbmltcG9ydCBkYXRlTmFtZVR5cGUgZnJvbSAnLi9kYXRlLW5hbWUtdHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE5hbWVzKGxvY2FsZSwgdHlwZSwgZm9ybWF0TGVuZ3RoLCBzdGFuZEFsb25lLCBsb3dlcikge1xuICAgIHJldHVybiBkYXRlRm9ybWF0TmFtZXMobG9jYWxlLCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIG5hbWVUeXBlOiBkYXRlTmFtZVR5cGUoZm9ybWF0TGVuZ3RoKSxcbiAgICAgICAgc3RhbmRBbG9uZTogc3RhbmRBbG9uZSxcbiAgICAgICAgbG93ZXI6IGxvd2VyXG4gICAgfSk7XG59IiwiZnVuY3Rpb24gaXNGdW5jdGlvbihmdW4pIHtcbiAgICByZXR1cm4gdHlwZW9mKGZ1bikgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmdldFRpbWUpICYmIGlzRnVuY3Rpb24odmFsdWUuZ2V0TW9udGgpO1xufVxuIiwiY29uc3QgTU9OVEggPSAnbW9udGgnO1xuY29uc3QgSE9VUiA9ICdob3VyJztcbmNvbnN0IFpPTkUgPSAnem9uZSc7XG5jb25zdCBXRUVLREFZID0gJ3dlZWtkYXknO1xuY29uc3QgUVVBUlRFUiA9ICdxdWFydGVyJztcblxuY29uc3QgREFURV9GSUVMRF9NQVAgPSB7XG4gICAgJ0cnOiAnZXJhJyxcbiAgICAneSc6ICd5ZWFyJyxcbiAgICAncSc6IFFVQVJURVIsXG4gICAgJ1EnOiBRVUFSVEVSLFxuICAgICdNJzogTU9OVEgsXG4gICAgJ0wnOiBNT05USCxcbiAgICAnZCc6ICdkYXknLFxuICAgICdFJzogV0VFS0RBWSxcbiAgICAnYyc6IFdFRUtEQVksXG4gICAgJ2UnOiBXRUVLREFZLFxuICAgICdoJzogSE9VUixcbiAgICAnSCc6IEhPVVIsXG4gICAgJ2snOiBIT1VSLFxuICAgICdLJzogSE9VUixcbiAgICAnbSc6ICdtaW51dGUnLFxuICAgICdzJzogJ3NlY29uZCcsXG4gICAgJ2EnOiAnZGF5cGVyaW9kJyxcbiAgICAneCc6IFpPTkUsXG4gICAgJ1gnOiBaT05FLFxuICAgICd6JzogWk9ORSxcbiAgICAnWic6IFpPTkVcbn07XG5cbmNvbnN0IGRhdGVGb3JtYXRSZWdFeHAgPSAvZHsxLDJ9fEV7MSw2fXxlezEsNn18Y3szLDZ9fGN7MX18TXsxLDV9fEx7MSw1fXx5ezEsNH18SHsxLDJ9fGh7MSwyfXxrezEsMn18S3sxLDJ9fG17MSwyfXxhezEsNX18c3sxLDJ9fFN7MSwzfXx6ezEsNH18WnsxLDV9fHh7MSw1fXxYezEsNX18R3sxLDV9fHF7MSw1fXxRezEsNX18XCJbXlwiXSpcInwnW14nXSonL2c7XG5cbmV4cG9ydCB7IGRhdGVGb3JtYXRSZWdFeHAsIERBVEVfRklFTERfTUFQIH07IiwiaW1wb3J0IHsgbG9jYWxlSW5mbywgZmlyc3REYXkgfSBmcm9tICcuLi9jbGRyJztcbmltcG9ydCB7IERFRkFVTFRfTE9DQUxFLCBFTVBUWSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IGZvcm1hdFN0cmluZyBmcm9tICcuLi9jb21tb24vZm9ybWF0LXN0cmluZyc7XG5pbXBvcnQgZGF0ZVBhdHRlcm4gZnJvbSAnLi9kYXRlLXBhdHRlcm4nO1xuaW1wb3J0IGZvcm1hdE5hbWVzIGZyb20gJy4vZm9ybWF0LW5hbWVzJztcbmltcG9ydCBwYWQgZnJvbSAnLi4vY29tbW9uL3BhZCc7XG5pbXBvcnQgaXNEYXRlIGZyb20gJy4uL2NvbW1vbi9pcy1kYXRlJztcbmltcG9ydCB7IGRhdGVGb3JtYXRSZWdFeHAgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIGZvcm1hdERheU9mV2Vla0luZGV4KGRheSwgZm9ybWF0TGVuZ3RoLCBsb2NhbGVJbmZvKSB7XG4gICAgY29uc3QgZmlyc3REYXlJbmRleCA9IGZpcnN0RGF5KGxvY2FsZUluZm8pO1xuICAgIGxldCBkYXlJbmRleDtcbiAgICBpZiAoZGF5IDwgZmlyc3REYXlJbmRleCkge1xuICAgICAgICBkYXlJbmRleCA9IDcgLSBmaXJzdERheUluZGV4ICsgZGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRheUluZGV4ID0gZGF5IC0gZmlyc3REYXlJbmRleDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5SW5kZXggKyAxO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNb250aChtb250aCwgZm9ybWF0TGVuZ3RoLCBpbmZvLCBzdGFuZEFsb25lKSB7XG4gICAgaWYgKGZvcm1hdExlbmd0aCA8PSAyKSB7XG4gICAgICAgIHJldHVybiBwYWQobW9udGggKyAxLCBmb3JtYXRMZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0TmFtZXMoaW5mbywgXCJtb250aHNcIiwgZm9ybWF0TGVuZ3RoLCBzdGFuZEFsb25lKVttb250aF07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFF1YXJ0ZXIoZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvLCBzdGFuZEFsb25lKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguZmxvb3IoZGF0ZS5nZXRNb250aCgpIC8gMyk7XG4gICAgaWYgKGZvcm1hdExlbmd0aCA8IDMpIHtcbiAgICAgICAgcmV0dXJuIHF1YXJ0ZXIgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXROYW1lcyhpbmZvLCBcInF1YXJ0ZXJzXCIsIGZvcm1hdExlbmd0aCwgc3RhbmRBbG9uZSlbcXVhcnRlcl07XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VGltZVpvbmUoZGF0ZSwgaW5mbywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2hvcnRIb3Vycywgb3B0aW9uYWxNaW51dGVzLCBzZXBhcmF0b3IsIGxvY2FsaXplZE5hbWUsIHpaZXJvT2Zmc2V0IH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwO1xuICAgIGlmIChvZmZzZXQgPT09IDAgJiYgelplcm9PZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cbiAgICBjb25zdCBzaWduID0gb2Zmc2V0IDw9IDAgPyBcIitcIiA6IFwiLVwiO1xuICAgIGNvbnN0IGhvdXJzTWludXRlcyA9IE1hdGguYWJzKG9mZnNldCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIik7XG4gICAgY29uc3QgbWludXRlcyA9IGhvdXJzTWludXRlc1sxXSB8fCAwO1xuICAgIGxldCByZXN1bHQgPSBzaWduICsgKHNob3J0SG91cnMgPyBob3Vyc01pbnV0ZXNbMF0gOiBwYWQoaG91cnNNaW51dGVzWzBdLCAyKSk7XG4gICAgaWYgKG1pbnV0ZXMgfHwgIW9wdGlvbmFsTWludXRlcykge1xuICAgICAgICByZXN1bHQgKz0gKHNlcGFyYXRvciA/IFwiOlwiIDogRU1QVFkpICsgcGFkKG1pbnV0ZXMsIDIpO1xuICAgIH1cblxuICAgIGlmIChsb2NhbGl6ZWROYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsaXplZEZvcm1hdCA9IG9mZnNldCA9PT0gMCA/IGluZm8uY2FsZW5kYXIuZ210WmVyb0Zvcm1hdCA6IGluZm8uY2FsZW5kYXIuZ210Rm9ybWF0O1xuICAgICAgICByZXN1bHQgPSBmb3JtYXRTdHJpbmcobG9jYWxpemVkRm9ybWF0LCByZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERheU9mV2VlayhkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8sIHN0YW5kQWxvbmUpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChmb3JtYXRMZW5ndGggPCAzKSB7XG4gICAgICAgIHJlc3VsdCA9IGZvcm1hdERheU9mV2Vla0luZGV4KGRhdGUuZ2V0RGF5KCksIGZvcm1hdExlbmd0aCwgaW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZm9ybWF0TmFtZXMoaW5mbywgXCJkYXlzXCIsIGZvcm1hdExlbmd0aCwgc3RhbmRBbG9uZSlbZGF0ZS5nZXREYXkoKV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IGZvcm1hdHRlcnMgPSB7fTtcblxuZm9ybWF0dGVycy5kID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSwgZm9ybWF0TGVuZ3RoKTtcbn07XG5cbmZvcm1hdHRlcnMuRSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbykge1xuICAgIHJldHVybiBmb3JtYXROYW1lcyhpbmZvLCBcImRheXNcIiwgZm9ybWF0TGVuZ3RoKVtkYXRlLmdldERheSgpXTtcbn07XG5cbmZvcm1hdHRlcnMuTSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbykge1xuICAgIHJldHVybiBmb3JtYXRNb250aChkYXRlLmdldE1vbnRoKCksIGZvcm1hdExlbmd0aCwgaW5mbywgZmFsc2UpO1xufTtcblxuZm9ybWF0dGVycy5MID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKSB7XG4gICAgcmV0dXJuIGZvcm1hdE1vbnRoKGRhdGUuZ2V0TW9udGgoKSwgZm9ybWF0TGVuZ3RoLCBpbmZvLCB0cnVlKTtcbn07XG5cbmZvcm1hdHRlcnMueSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCkge1xuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChmb3JtYXRMZW5ndGggPT09IDIpIHtcbiAgICAgICAgeWVhciA9IHllYXIgJSAxMDA7XG4gICAgfVxuICAgIHJldHVybiBwYWQoeWVhciwgZm9ybWF0TGVuZ3RoKTtcbn07XG5cbmZvcm1hdHRlcnMuaCA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTI7XG4gICAgcmV0dXJuIHBhZChob3VycywgZm9ybWF0TGVuZ3RoKTtcbn07XG5cbmZvcm1hdHRlcnMuSCA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpLCBmb3JtYXRMZW5ndGgpO1xufTtcblxuZm9ybWF0dGVycy5rID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkgfHwgMjQsIGZvcm1hdExlbmd0aCk7XG59O1xuXG5mb3JtYXR0ZXJzLksgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSAlIDEyLCBmb3JtYXRMZW5ndGgpO1xufTtcblxuZm9ybWF0dGVycy5tID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSwgZm9ybWF0TGVuZ3RoKTtcbn07XG5cbmZvcm1hdHRlcnMucyA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCksIGZvcm1hdExlbmd0aCk7XG59O1xuXG5mb3JtYXR0ZXJzLlMgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgpIHtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKG1pbGxpc2Vjb25kcyAhPT0gMCkge1xuICAgICAgICByZXN1bHQgPSBTdHJpbmcoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMDApLnNwbGl0KFwiLlwiKVsxXS5zdWJzdHIoMCwgZm9ybWF0TGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBwYWQoRU1QVFksIGZvcm1hdExlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5mb3JtYXR0ZXJzLmEgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8pIHtcbiAgICByZXR1cm4gZm9ybWF0TmFtZXMoaW5mbywgXCJkYXlQZXJpb2RzXCIsIGZvcm1hdExlbmd0aClbZGF0ZS5nZXRIb3VycygpIDwgMTIgPyBcImFtXCIgOiBcInBtXCJdO1xufTtcblxuZm9ybWF0dGVycy56ID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKSB7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWVab25lKGRhdGUsIGluZm8sIHtcbiAgICAgICAgc2hvcnRIb3VyczogZm9ybWF0TGVuZ3RoIDwgNCxcbiAgICAgICAgb3B0aW9uYWxNaW51dGVzOiBmb3JtYXRMZW5ndGggPCA0LFxuICAgICAgICBzZXBhcmF0b3I6IHRydWUsXG4gICAgICAgIGxvY2FsaXplZE5hbWU6IHRydWVcbiAgICB9KTtcbn07XG5cbmZvcm1hdHRlcnMuWiA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbykge1xuICAgIHJldHVybiBmb3JtYXRUaW1lWm9uZShkYXRlLCBpbmZvLCB7XG4gICAgICAgIHNlcGFyYXRvcjogZm9ybWF0TGVuZ3RoID4gMyxcbiAgICAgICAgbG9jYWxpemVkTmFtZTogZm9ybWF0TGVuZ3RoID09PSA0LFxuICAgICAgICB6WmVyb09mZnNldDogZm9ybWF0TGVuZ3RoID09PSA1XG4gICAgfSk7XG59O1xuXG5mb3JtYXR0ZXJzLnggPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8pIHtcbiAgICByZXR1cm4gZm9ybWF0VGltZVpvbmUoZGF0ZSwgaW5mbywge1xuICAgICAgICBvcHRpb25hbE1pbnV0ZXM6IGZvcm1hdExlbmd0aCA9PT0gMSxcbiAgICAgICAgc2VwYXJhdG9yOiBmb3JtYXRMZW5ndGggPT09IDMgfHwgZm9ybWF0TGVuZ3RoID09PSA1XG4gICAgfSk7XG59O1xuXG5mb3JtYXR0ZXJzLlggPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8pIHtcbiAgICByZXR1cm4gZm9ybWF0VGltZVpvbmUoZGF0ZSwgaW5mbywge1xuICAgICAgICBvcHRpb25hbE1pbnV0ZXM6IGZvcm1hdExlbmd0aCA9PT0gMSxcbiAgICAgICAgc2VwYXJhdG9yOiBmb3JtYXRMZW5ndGggPT09IDMgfHwgZm9ybWF0TGVuZ3RoID09PSA1LFxuICAgICAgICB6WmVyb09mZnNldDogdHJ1ZVxuICAgIH0pO1xufTtcblxuZm9ybWF0dGVycy5HID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKSB7XG4gICAgbGV0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+PSAwID8gMSA6IDA7XG4gICAgcmV0dXJuIGZvcm1hdE5hbWVzKGluZm8sIFwiZXJhc1wiLCBmb3JtYXRMZW5ndGgpW2VyYV07XG59O1xuXG5mb3JtYXR0ZXJzLmUgPSBmb3JtYXREYXlPZldlZWs7XG5cbmZvcm1hdHRlcnMuYyA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbykge1xuICAgIHJldHVybiBmb3JtYXREYXlPZldlZWsoZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvLCB0cnVlKTtcbn07XG5cbmZvcm1hdHRlcnMucSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbykge1xuICAgIHJldHVybiBmb3JtYXRRdWFydGVyKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbywgdHJ1ZSk7XG59O1xuXG5mb3JtYXR0ZXJzLlEgPSBmb3JtYXRRdWFydGVyO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgbG9jYWxlID0gREVGQVVMVF9MT0NBTEUpIHtcbiAgICBpZiAoIWlzRGF0ZShkYXRlKSkge1xuICAgICAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGRhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmZvID0gbG9jYWxlSW5mbyhsb2NhbGUpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBkYXRlUGF0dGVybihmb3JtYXQsIGluZm8pO1xuXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShkYXRlRm9ybWF0UmVnRXhwLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICBsZXQgZm9ybWF0TGVuZ3RoID0gbWF0Y2gubGVuZ3RoO1xuICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgIGlmIChtYXRjaC5pbmNsdWRlcyhcIidcIikgfHwgbWF0Y2guaW5jbHVkZXMoXCJcXFwiXCIpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBtYXRjaC5zbGljZSgxLCBmb3JtYXRMZW5ndGggLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZvcm1hdHRlcnNbbWF0Y2hbMF1dKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUaW1lWm9uZShkYXRlLCBmcm9tT2Zmc2V0LCB0b09mZnNldCkge1xuICAgIGNvbnN0IGZyb21Mb2NhbE9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGNvbnN0IG9mZnNldERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIChmcm9tT2Zmc2V0IC0gdG9PZmZzZXQpICogNjAwMDApO1xuXG4gICAgY29uc3QgdG9Mb2NhbE9mZnNldCA9IG9mZnNldERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHJldHVybiBuZXcgRGF0ZShvZmZzZXREYXRlLmdldFRpbWUoKSArICh0b0xvY2FsT2Zmc2V0IC0gZnJvbUxvY2FsT2Zmc2V0KSAqIDYwMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdERTVChkYXRlLCBob3Vycykge1xuICAgIGlmICghaG91cnMgJiYgZGF0ZS5nZXRIb3VycygpID09PSAyMykge1xuICAgICAgICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSArIDIpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBhZGp1c3REU1QsIGNvbnZlcnRUaW1lWm9uZSB9IGZyb20gJy4vdGltZS11dGlscyc7XG5pbXBvcnQgeyBsb2NhbGVJbmZvIH0gZnJvbSAnLi4vY2xkcic7XG5pbXBvcnQgeyBERUZBVUxUX0xPQ0FMRSwgRU1QVFkgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IGVycm9ycyB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgZm9ybWF0TmFtZXMgZnJvbSAnLi9mb3JtYXQtbmFtZXMnO1xuaW1wb3J0IGRhdGVQYXR0ZXJuIGZyb20gJy4vZGF0ZS1wYXR0ZXJuJztcbmltcG9ydCByb3VuZCBmcm9tICcuLi9jb21tb24vcm91bmQnO1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi9jb21tb24vaXMtZGF0ZSc7XG5cbmNvbnN0IHRpbWVab25lT2Zmc2V0UmVnRXhwID0gLyhbK3xcXC1dXFxkezEsMn0pKDo/KShcXGR7Mn0pPy87XG5jb25zdCBkYXRlUmVnRXhwID0gL15cXC9EYXRlXFwoKC4qPylcXClcXC8kLztcbmNvbnN0IG9mZnNldFJlZ0V4cCA9IC9bKy1dXFxkKi87XG5jb25zdCBudW1iZXJSZWdFeHAgPSB7XG4gICAgMjogL15cXGR7MSwyfS8sXG4gICAgMzogL15cXGR7MSwzfS8sXG4gICAgNDogL15cXGR7NH0vXG59O1xuY29uc3QgbnVtYmVyUmVnZXggPSAvXFxkKy87XG5jb25zdCBQTEFDRUhPTERFUiA9IFwiezB9XCI7XG5cbmNvbnN0IHN0YW5kYXJkRGF0ZUZvcm1hdHMgPSBbXG4gICAgXCJ5eXl5L01NL2RkIEhIOm1tOnNzXCIsXG4gICAgXCJ5eXl5L01NL2RkIEhIOm1tXCIsXG4gICAgXCJ5eXl5L01NL2RkXCIsXG4gICAgXCJFIE1NTSBkZCB5eXl5IEhIOm1tOnNzXCIsXG4gICAgXCJ5eXl5LU1NLWRkVEhIOm1tOnNzLlNTU1NTU1NYWFhcIixcbiAgICBcInl5eXktTU0tZGRUSEg6bW06c3MuU1NTWFhYXCIsXG4gICAgXCJ5eXl5LU1NLWRkVEhIOm1tOnNzLlNTWFhYXCIsXG4gICAgXCJ5eXl5LU1NLWRkVEhIOm1tOnNzWFhYXCIsXG4gICAgXCJ5eXl5LU1NLWRkVEhIOm1tOnNzLlNTU1NTU1NcIixcbiAgICBcInl5eXktTU0tZGRUSEg6bW06c3MuU1NTXCIsXG4gICAgXCJ5eXl5LU1NLWRkVEhIOm1tWFhYXCIsXG4gICAgXCJ5eXl5LU1NLWRkVEhIOm1tWFwiLFxuICAgIFwieXl5eS1NTS1kZFRISDptbTpzc1wiLFxuICAgIFwieXl5eS1NTS1kZFRISDptbVwiLFxuICAgIFwieXl5eS1NTS1kZCBISDptbTpzc1wiLFxuICAgIFwieXl5eS1NTS1kZCBISDptbVwiLFxuICAgIFwieXl5eS1NTS1kZFwiLFxuICAgIFwiSEg6bW06c3NcIixcbiAgICBcIkhIOm1tXCJcbl07XG5jb25zdCBGT1JNQVRTX1NFUVVFTkNFID0gWyBcIkdcIiwgXCJnXCIsIFwiRlwiLCBcIllcIiwgXCJ5XCIsIFwiTVwiLCBcIm1cIiwgXCJEXCIsIFwiZFwiLCBcInlcIiwgXCJUXCIsIFwidFwiIF07XG5jb25zdCBUV09fRElHSVRfWUVBUl9NQVggPSAyMDI5O1xuXG5mdW5jdGlvbiBvdXRPZlJhbmdlKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuICEodmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPD0gZW5kKTtcbn1cblxuZnVuY3Rpb24gbG9va0FoZWFkKG1hdGNoLCBzdGF0ZSkge1xuICAgIGxldCB7IGZvcm1hdCwgaWR4IH0gPSBzdGF0ZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGZvcm1hdFtpZHhdID09PSBtYXRjaCkge1xuICAgICAgICBpKys7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cbiAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgaWR4IC09IDE7XG4gICAgfVxuICAgIHN0YXRlLmlkeCA9IGlkeDtcbiAgICByZXR1cm4gaTtcbn1cblxuZnVuY3Rpb24gZ2V0TnVtYmVyKHNpemUsIHN0YXRlKSB7XG4gICAgbGV0IHJlZ2V4ID0gc2l6ZSA/IChudW1iZXJSZWdFeHBbc2l6ZV0gfHwgbmV3IFJlZ0V4cCgnXlxcXFxkezEsJyArIHNpemUgKyAnfScpKSA6IG51bWJlclJlZ2V4LFxuICAgICAgICBtYXRjaCA9IHN0YXRlLnZhbHVlLnN1YnN0cihzdGF0ZS52YWx1ZUlkeCwgc2l6ZSkubWF0Y2gocmVnZXgpO1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG1hdGNoID0gbWF0Y2hbMF07XG4gICAgICAgIHN0YXRlLnZhbHVlSWR4ICs9IG1hdGNoLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoLCAxMCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRJbmRleEJ5TmFtZShuYW1lcywgc3RhdGUsIGxvd2VyKSB7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBsZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIG5hbWUsIG5hbWVMZW5ndGgsXG4gICAgICAgIG1hdGNoTGVuZ3RoID0gMCxcbiAgICAgICAgbWF0Y2hJZHggPSAwLFxuICAgICAgICBzdWJWYWx1ZTtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICBuYW1lTGVuZ3RoID0gbmFtZS5sZW5ndGg7XG4gICAgICAgIHN1YlZhbHVlID0gc3RhdGUudmFsdWUuc3Vic3RyKHN0YXRlLnZhbHVlSWR4LCBuYW1lTGVuZ3RoKTtcblxuICAgICAgICBpZiAobG93ZXIpIHtcbiAgICAgICAgICAgIHN1YlZhbHVlID0gc3ViVmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWJWYWx1ZSA9PT0gbmFtZSAmJiBuYW1lTGVuZ3RoID4gbWF0Y2hMZW5ndGgpIHtcbiAgICAgICAgICAgIG1hdGNoTGVuZ3RoID0gbmFtZUxlbmd0aDtcbiAgICAgICAgICAgIG1hdGNoSWR4ID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaExlbmd0aCkge1xuICAgICAgICBzdGF0ZS52YWx1ZUlkeCArPSBtYXRjaExlbmd0aDtcbiAgICAgICAgcmV0dXJuIG1hdGNoSWR4ICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hlY2tMaXRlcmFsKHN0YXRlKSB7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmIChzdGF0ZS52YWx1ZS5jaGFyQXQoc3RhdGUudmFsdWVJZHgpID09PSBzdGF0ZS5mb3JtYXRbc3RhdGUuaWR4XSkge1xuICAgICAgICBzdGF0ZS52YWx1ZUlkeCsrO1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjYWxlbmRhckdtdEZvcm1hdHMoY2FsZW5kYXIpIHtcbiAgICBjb25zdCB7IGdtdEZvcm1hdCwgZ210WmVyb0Zvcm1hdCB9ID0gY2FsZW5kYXI7XG4gICAgaWYgKCFnbXRGb3JtYXQpIHtcbiAgICAgICAgdGhyb3cgZXJyb3JzLk5vR01USW5mby5lcnJvcigpO1xuICAgIH1cblxuICAgIHJldHVybiBbIGdtdEZvcm1hdC5yZXBsYWNlKFBMQUNFSE9MREVSLCBFTVBUWSkudG9Mb3dlckNhc2UoKSwgZ210WmVyb0Zvcm1hdC5yZXBsYWNlKFBMQUNFSE9MREVSLCBFTVBUWSkudG9Mb3dlckNhc2UoKSBdO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVab25lT2Zmc2V0KHN0YXRlLCBpbmZvLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBzaG9ydEhvdXJzLCBub1NlcGFyYXRvciwgb3B0aW9uYWxNaW51dGVzLCBsb2NhbGl6ZWROYW1lLCB6TGl0ZXJhbCB9ID0gb3B0aW9ucztcbiAgICBzdGF0ZS5VVEMgPSB0cnVlO1xuXG4gICAgaWYgKHpMaXRlcmFsICYmIHN0YXRlLnZhbHVlLmNoYXJBdChzdGF0ZS52YWx1ZUlkeCkgPT09IFwiWlwiKSB7XG4gICAgICAgIHN0YXRlLnZhbHVlSWR4Kys7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYWxpemVkTmFtZSAmJiAhZ2V0SW5kZXhCeU5hbWUoY2FsZW5kYXJHbXRGb3JtYXRzKGluZm8uY2FsZW5kYXIpLCBzdGF0ZSwgdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2hlcyA9IHRpbWVab25lT2Zmc2V0UmVnRXhwLmV4ZWMoc3RhdGUudmFsdWUuc3Vic3RyKHN0YXRlLnZhbHVlSWR4LCA2KSk7XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiAhbG9jYWxpemVkTmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBob3Vyc01hdGNoID0gbWF0Y2hlc1sxXTtcbiAgICBjb25zdCBtaW51dGVzTWF0Y2ggPSBtYXRjaGVzWzNdO1xuICAgIGNvbnN0IGhvdXJzT2Zmc2V0ID0gcGFyc2VJbnQoaG91cnNNYXRjaCwgMTApO1xuICAgIGNvbnN0IHNlcGFyYXRvciA9IG1hdGNoZXNbMl07XG4gICAgbGV0IG1pbnV0ZXNPZmZzZXQgPSBwYXJzZUludChtaW51dGVzTWF0Y2gsIDEwKTtcblxuICAgIGlmIChpc05hTihob3Vyc09mZnNldCkgfHwgKCFzaG9ydEhvdXJzICYmIGhvdXJzTWF0Y2gubGVuZ3RoICE9PSAzKSB8fCAoIW9wdGlvbmFsTWludXRlcyAmJiBpc05hTihtaW51dGVzT2Zmc2V0KSkgfHwgKG5vU2VwYXJhdG9yICYmIHNlcGFyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzTmFOKG1pbnV0ZXNPZmZzZXQpKSB7XG4gICAgICAgIG1pbnV0ZXNPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChvdXRPZlJhbmdlKGhvdXJzT2Zmc2V0LCAtMTIsIDEzKSB8fCAobWludXRlc09mZnNldCAmJiBvdXRPZlJhbmdlKG1pbnV0ZXNPZmZzZXQsIDAsIDU5KSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGUudmFsdWVJZHggKz0gbWF0Y2hlc1swXS5sZW5ndGg7XG4gICAgc3RhdGUuaG91cnNPZmZzZXQgPSBob3Vyc09mZnNldDtcbiAgICBzdGF0ZS5taW51dGVzT2Zmc2V0ID0gbWludXRlc09mZnNldDtcbn1cblxuZnVuY3Rpb24gcGFyc2VNb250aChjaCwgc3RhdGUsIGluZm8pIHtcbiAgICBjb25zdCBjb3VudCA9IGxvb2tBaGVhZChjaCwgc3RhdGUpO1xuICAgIGNvbnN0IG5hbWVzID0gZm9ybWF0TmFtZXMoaW5mbywgXCJtb250aHNcIiwgY291bnQsIGNoID09PSBcIkxcIiwgdHJ1ZSk7XG5cbiAgICBjb25zdCBtb250aCA9IGNvdW50IDwgMyA/IGdldE51bWJlcigyLCBzdGF0ZSkgOiBnZXRJbmRleEJ5TmFtZShuYW1lcywgc3RhdGUsIHRydWUpO1xuXG4gICAgaWYgKG1vbnRoID09PSBudWxsIHx8IG91dE9mUmFuZ2UobW9udGgsIDEsIDEyKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGUubW9udGggPSBtb250aCAtIDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF5T2ZXZWVrKGNoLCBzdGF0ZSwgaW5mbykge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKGNoLCBzdGF0ZSk7XG4gICAgY29uc3QgbmFtZXMgPSBmb3JtYXROYW1lcyhpbmZvLCBcImRheXNcIiwgY291bnQsIGNoID09PSBcImNcIiwgdHJ1ZSk7XG4gICAgbGV0IGRheU9mV2VlayA9IGNvdW50IDwgMyA/IGdldE51bWJlcigxLCBzdGF0ZSkgOiBnZXRJbmRleEJ5TmFtZShuYW1lcywgc3RhdGUsIHRydWUpO1xuICAgIGlmICgoIWRheU9mV2VlayAmJiBkYXlPZldlZWsgIT09IDApIHx8IG91dE9mUmFuZ2UoZGF5T2ZXZWVrLCAxLCA3KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmNvbnN0IHBhcnNlcnMgPSB7fTtcblxucGFyc2Vycy5kID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBsb29rQWhlYWQoXCJkXCIsIHN0YXRlKTtcbiAgICBjb25zdCBkYXkgPSBnZXROdW1iZXIoMiwgc3RhdGUpO1xuXG4gICAgaWYgKGRheSA9PT0gbnVsbCB8fCBvdXRPZlJhbmdlKGRheSwgMSwgMzEpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kYXkgPT09IG51bGwpIHtcbiAgICAgICAgc3RhdGUuZGF5ID0gZGF5O1xuICAgIH1cbn07XG5cbnBhcnNlcnMuRSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoXCJFXCIsIHN0YXRlKTtcbiAgICAvL3ZhbGlkYXRlIGlmIGl0IG1hdGNoZXMgdGhlIGRheT9cbiAgICBsZXQgZGF5T2ZXZWVrID0gZ2V0SW5kZXhCeU5hbWUoZm9ybWF0TmFtZXMoaW5mbywgXCJkYXlzXCIsIGNvdW50LCBmYWxzZSwgdHJ1ZSksIHN0YXRlLCB0cnVlKTtcbiAgICBpZiAoZGF5T2ZXZWVrID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cbnBhcnNlcnMuTSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgcmV0dXJuIHBhcnNlTW9udGgoXCJNXCIsIHN0YXRlLCBpbmZvKTtcbn07XG5cbnBhcnNlcnMuTCA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgcmV0dXJuIHBhcnNlTW9udGgoXCJMXCIsIHN0YXRlLCBpbmZvKTtcbn07XG5cbnBhcnNlcnMueSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoXCJ5XCIsIHN0YXRlKTtcbiAgICBsZXQgeWVhciA9IGdldE51bWJlcihjb3VudCA9PT0gMSA/IHVuZGVmaW5lZCA6IGNvdW50LCBzdGF0ZSk7XG5cbiAgICBpZiAoeWVhciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY291bnQgPT09IDIpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHllYXIgPSAoY3VycmVudFllYXIgLSBjdXJyZW50WWVhciAlIDEwMCkgKyB5ZWFyO1xuICAgICAgICBpZiAoeWVhciA+IFRXT19ESUdJVF9ZRUFSX01BWCkge1xuICAgICAgICAgICAgeWVhciAtPSAxMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS55ZWFyID0geWVhcjtcbn07XG5cbnBhcnNlcnMuaCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgbG9va0FoZWFkKFwiaFwiLCBzdGF0ZSk7XG5cbiAgICBsZXQgaG91cnMgPSBnZXROdW1iZXIoMiwgc3RhdGUpO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgICAgaG91cnMgPSAwO1xuICAgIH1cblxuICAgIGlmIChob3VycyA9PT0gbnVsbCB8fCBvdXRPZlJhbmdlKGhvdXJzLCAwLCAxMSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGUuaG91cnMgPSBob3Vycztcbn07XG5cbnBhcnNlcnMuSyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgbG9va0FoZWFkKFwiS1wiLCBzdGF0ZSk7XG5cbiAgICBsZXQgaG91cnMgPSBnZXROdW1iZXIoMiwgc3RhdGUpO1xuXG4gICAgaWYgKGhvdXJzID09PSBudWxsIHx8IG91dE9mUmFuZ2UoaG91cnMsIDAsIDExKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5ob3VycyA9IGhvdXJzO1xufTtcblxucGFyc2Vycy5hID0gZnVuY3Rpb24oc3RhdGUsIGluZm8pIHtcbiAgICBjb25zdCBjb3VudCA9IGxvb2tBaGVhZChcImFcIiwgc3RhdGUpO1xuICAgIGxldCBwZXJpb2RGb3JtYXRzID0gZm9ybWF0TmFtZXMoaW5mbywgXCJkYXlQZXJpb2RzXCIsIGNvdW50LCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBjb25zdCBwbUhvdXIgPSBnZXRJbmRleEJ5TmFtZShbIHBlcmlvZEZvcm1hdHMucG0gXSwgc3RhdGUsIHRydWUpO1xuICAgIGlmICghcG1Ib3VyICYmICFnZXRJbmRleEJ5TmFtZShbIHBlcmlvZEZvcm1hdHMuYW0gXSwgc3RhdGUsIHRydWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRlLnBtSG91ciA9IHBtSG91cjtcbn07XG5cbnBhcnNlcnMuSCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgbG9va0FoZWFkKFwiSFwiLCBzdGF0ZSk7XG4gICAgY29uc3QgaG91cnMgPSBnZXROdW1iZXIoMiwgc3RhdGUpO1xuICAgIGlmIChob3VycyA9PT0gbnVsbCB8fCBvdXRPZlJhbmdlKGhvdXJzLCAwLCAyMykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRlLmhvdXJzID0gaG91cnM7XG59O1xuXG5wYXJzZXJzLmsgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGxvb2tBaGVhZChcImtcIiwgc3RhdGUpO1xuXG4gICAgbGV0IGhvdXJzID0gZ2V0TnVtYmVyKDIsIHN0YXRlKTtcblxuICAgIGlmIChob3VycyA9PT0gbnVsbCB8fCBvdXRPZlJhbmdlKGhvdXJzLCAxLCAyNCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGUuaG91cnMgPSBob3VycyA9PT0gMjQgPyAwIDogaG91cnM7XG59O1xuXG5wYXJzZXJzLm0gPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGxvb2tBaGVhZChcIm1cIiwgc3RhdGUpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBnZXROdW1iZXIoMiwgc3RhdGUpO1xuXG4gICAgaWYgKG1pbnV0ZXMgPT09IG51bGwgfHwgb3V0T2ZSYW5nZShtaW51dGVzLCAwLCA1OSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGUubWludXRlcyA9IG1pbnV0ZXM7XG59O1xuXG5wYXJzZXJzLnMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGxvb2tBaGVhZChcInNcIiwgc3RhdGUpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBnZXROdW1iZXIoMiwgc3RhdGUpO1xuICAgIGlmIChzZWNvbmRzID09PSBudWxsIHx8IG91dE9mUmFuZ2Uoc2Vjb25kcywgMCwgNTkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0ZS5zZWNvbmRzID0gc2Vjb25kcztcbn07XG5cbnBhcnNlcnMuUyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoXCJTXCIsIHN0YXRlKTtcbiAgICBjb25zdCBtYXRjaCA9IHN0YXRlLnZhbHVlLnN1YnN0cihzdGF0ZS52YWx1ZUlkeCwgY291bnQpO1xuICAgIGxldCBtaWxsaXNlY29uZHMgPSBudWxsO1xuXG4gICAgaWYgKCFpc05hTihwYXJzZUludChtYXRjaCwgMTApKSkge1xuICAgICAgICBtaWxsaXNlY29uZHMgPSBwYXJzZUZsb2F0KFwiMC5cIiArIG1hdGNoLCAxMCk7XG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IHJvdW5kKG1pbGxpc2Vjb25kcywgMyk7XG4gICAgICAgIG1pbGxpc2Vjb25kcyAqPSAxMDAwO1xuICAgICAgICBzdGF0ZS52YWx1ZUlkeCArPSBjb3VudDtcbiAgICB9XG5cbiAgICBpZiAobWlsbGlzZWNvbmRzID09PSBudWxsIHx8IG91dE9mUmFuZ2UobWlsbGlzZWNvbmRzLCAwLCA5OTkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRlLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcztcbn07XG5cbnBhcnNlcnMueiA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoXCJ6XCIsIHN0YXRlKTtcblxuICAgIGNvbnN0IHNob3J0Rm9ybWF0ID0gY291bnQgPCA0O1xuXG4gICAgY29uc3QgaW52YWxpZCA9IHBhcnNlVGltZVpvbmVPZmZzZXQoc3RhdGUsIGluZm8sIHtcbiAgICAgICAgc2hvcnRIb3Vyczogc2hvcnRGb3JtYXQsXG4gICAgICAgIG9wdGlvbmFsTWludXRlczogc2hvcnRGb3JtYXQsXG4gICAgICAgIGxvY2FsaXplZE5hbWU6IHRydWVcbiAgICB9KTtcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIHJldHVybiBpbnZhbGlkO1xuICAgIH1cbn07XG5cbnBhcnNlcnMuWiA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoXCJaXCIsIHN0YXRlKTtcblxuICAgIGNvbnN0IGludmFsaWQgPSBwYXJzZVRpbWVab25lT2Zmc2V0KHN0YXRlLCBpbmZvLCB7XG4gICAgICAgIG5vU2VwYXJhdG9yOiBjb3VudCA8IDQsXG4gICAgICAgIHpMaXRlcmFsOiBjb3VudCA9PT0gNSxcbiAgICAgICAgbG9jYWxpemVkTmFtZTogY291bnQgPT09IDRcbiAgICB9KTtcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIHJldHVybiBpbnZhbGlkO1xuICAgIH1cbn07XG5cbnBhcnNlcnMueCA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoXCJ4XCIsIHN0YXRlKTtcblxuICAgIGNvbnN0IGludmFsaWQgPSBwYXJzZVRpbWVab25lT2Zmc2V0KHN0YXRlLCBpbmZvLCB7XG4gICAgICAgIG5vU2VwYXJhdG9yOiBjb3VudCAhPT0gMyAmJiBjb3VudCAhPT0gNSxcbiAgICAgICAgb3B0aW9uYWxNaW51dGVzOiBjb3VudCA9PT0gMVxuICAgIH0pO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIHJldHVybiBpbnZhbGlkO1xuICAgIH1cbn07XG5cbnBhcnNlcnMuWCA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoXCJYXCIsIHN0YXRlKTtcblxuICAgIGNvbnN0IGludmFsaWQgPSBwYXJzZVRpbWVab25lT2Zmc2V0KHN0YXRlLCBpbmZvLCB7XG4gICAgICAgIG5vU2VwYXJhdG9yOiBjb3VudCAhPT0gMyAmJiBjb3VudCAhPT0gNSxcbiAgICAgICAgb3B0aW9uYWxNaW51dGVzOiBjb3VudCA9PT0gMSxcbiAgICAgICAgekxpdGVyYWw6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICByZXR1cm4gaW52YWxpZDtcbiAgICB9XG59O1xuXG5wYXJzZXJzLkcgPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKFwiR1wiLCBzdGF0ZSk7XG4gICAgY29uc3QgZXJhcyA9IGZvcm1hdE5hbWVzKGluZm8sIFwiZXJhc1wiLCBjb3VudCwgZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IGVyYSA9IGdldEluZGV4QnlOYW1lKFsgZXJhc1swXSwgZXJhc1sxXSBdLCBzdGF0ZSwgdHJ1ZSk7XG5cbiAgICBpZiAoZXJhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cbnBhcnNlcnMuZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgcmV0dXJuIHBhcnNlRGF5T2ZXZWVrKFwiZVwiLCBzdGF0ZSwgaW5mbyk7XG59O1xuXG5wYXJzZXJzLmMgPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIHJldHVybiBwYXJzZURheU9mV2VlayhcImNcIiwgc3RhdGUsIGluZm8pO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRGF0ZShzdGF0ZSkge1xuICAgIGxldCB7IHllYXIsIG1vbnRoLCBkYXksIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMsIHBtSG91ciwgVVRDLCBob3Vyc09mZnNldCwgbWludXRlc09mZnNldCB9ID0gc3RhdGU7XG4gICAgY29uc3QgaGFzVGltZSA9IGhvdXJzICE9PSBudWxsIHx8IG1pbnV0ZXMgIT09IG51bGwgfHwgc2Vjb25kcyB8fCBudWxsO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoeWVhciA9PT0gbnVsbCAmJiBtb250aCA9PT0gbnVsbCAmJiBkYXkgPT09IG51bGwgJiYgaGFzVGltZSkge1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHllYXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBkYXkgPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBtSG91ciAmJiBob3VycyA8IDEyKSB7XG4gICAgICAgIGhvdXJzICs9IDEyO1xuICAgIH1cblxuICAgIGlmIChVVEMpIHtcbiAgICAgICAgaWYgKGhvdXJzT2Zmc2V0KSB7XG4gICAgICAgICAgICBob3VycyArPSAtaG91cnNPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlc09mZnNldCkge1xuICAgICAgICAgICAgbWludXRlcyArPSAtbWludXRlc09mZnNldCAqIChob3Vyc09mZnNldCA8IDAgPyAtMSA6IDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRheSwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMpO1xuICAgICAgICBhZGp1c3REU1QocmVzdWx0LCBob3Vycyk7XG4gICAgfVxuXG4gICAgaWYgKHllYXIgPCAxMDApIHtcbiAgICAgICAgcmVzdWx0LnNldEZ1bGxZZWFyKHllYXIpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQuZ2V0RGF0ZSgpICE9PSBkYXkgJiYgVVRDID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeGFjdCh2YWx1ZSwgZm9ybWF0LCBpbmZvKSB7XG4gICAgbGV0IHBhdHRlcm4gPSBkYXRlUGF0dGVybihmb3JtYXQsIGluZm8pLnNwbGl0KEVNUFRZKTtcblxuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBmb3JtYXQ6IHBhdHRlcm4sXG4gICAgICAgIGlkeDogMCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB2YWx1ZUlkeDogMCxcbiAgICAgICAgeWVhcjogbnVsbCxcbiAgICAgICAgbW9udGg6IG51bGwsXG4gICAgICAgIGRheTogbnVsbCxcbiAgICAgICAgaG91cnM6IG51bGwsXG4gICAgICAgIG1pbnV0ZXM6IG51bGwsXG4gICAgICAgIHNlY29uZHM6IG51bGwsXG4gICAgICAgIG1pbGxpc2Vjb25kczogbnVsbFxuICAgIH07XG4gICAgY29uc3QgbGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG4gICAgbGV0IGxpdGVyYWwgPSBmYWxzZTtcblxuICAgIGZvciAoOyBzdGF0ZS5pZHggPCBsZW5ndGg7IHN0YXRlLmlkeCsrKSB7XG4gICAgICAgIGxldCBjaCA9IHBhdHRlcm5bc3RhdGUuaWR4XTtcblxuICAgICAgICBpZiAobGl0ZXJhbCkge1xuICAgICAgICAgICAgaWYgKGNoID09PSBcIidcIikge1xuICAgICAgICAgICAgICAgIGxpdGVyYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hlY2tMaXRlcmFsKHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXJzZXJzW2NoXSkge1xuICAgICAgICAgICAgICAgIGxldCBpbnZhbGlkID0gcGFyc2Vyc1tjaF0oc3RhdGUsIGluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICAgICAgbGl0ZXJhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2hlY2tMaXRlcmFsKHN0YXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrTGl0ZXJhbChzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS52YWx1ZUlkeCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRGF0ZShzdGF0ZSkgfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaWNyb3NvZnREYXRlT2Zmc2V0KG9mZnNldCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQuc3Vic3RyKDAsIDEpID09PSBcIi1cIiA/IC0xIDogMTtcblxuICAgIGxldCByZXN1bHQgPSBvZmZzZXQuc3Vic3RyaW5nKDEpO1xuICAgIHJlc3VsdCA9IChwYXJzZUludChyZXN1bHQuc3Vic3RyKDAsIDIpLCAxMCkgKiA2MCkgKyBwYXJzZUludChyZXN1bHQuc3Vic3RyaW5nKDIpLCAxMCk7XG5cbiAgICByZXR1cm4gc2lnbiAqIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaWNyb3NvZnREYXRlRm9ybWF0KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoXCIvRFwiKSA9PT0gMCkge1xuICAgICAgICBsZXQgZGF0ZSA9IGRhdGVSZWdFeHAuZXhlYyh2YWx1ZSk7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZVsxXTtcbiAgICAgICAgICAgIGxldCB0em9mZnNldCA9IG9mZnNldFJlZ0V4cC5leGVjKGRhdGUuc3Vic3RyaW5nKDEpKTtcblxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGUsIDEwKSk7XG5cbiAgICAgICAgICAgIGlmICh0em9mZnNldCkge1xuICAgICAgICAgICAgICAgIHR6b2Zmc2V0ID0gcGFyc2VNaWNyb3NvZnREYXRlT2Zmc2V0KHR6b2Zmc2V0WzBdKTtcbiAgICAgICAgICAgICAgICBkYXRlID0gY29udmVydFRpbWVab25lKGRhdGUsIGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSwgMCk7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IGNvbnZlcnRUaW1lWm9uZShkYXRlLCAwLCAtMSAqIHR6b2Zmc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRGb3JtYXRzKGNhbGVuZGFyKSB7XG4gICAgY29uc3QgZm9ybWF0cyA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm5zID0gY2FsZW5kYXIucGF0dGVybnM7XG4gICAgY29uc3QgbGVuZ3RoID0gRk9STUFUU19TRVFVRU5DRS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGZvcm1hdHMucHVzaChwYXR0ZXJuc1tGT1JNQVRTX1NFUVVFTkNFW2lkeF1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0cy5jb25jYXQoc3RhbmRhcmREYXRlRm9ybWF0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlRGF0ZSh2YWx1ZSwgZm9ybWF0cywgbG9jYWxlID0gREVGQVVMVF9MT0NBTEUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VWYWx1ZSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xuICAgIGxldCBkYXRlID0gcGFyc2VNaWNyb3NvZnREYXRlRm9ybWF0KHBhcnNlVmFsdWUpO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGluZm8gPSBsb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgbGV0IHBhcnNlRm9ybWF0cyA9IGZvcm1hdHMgfHwgZGVmYXVsdEZvcm1hdHMoaW5mby5jYWxlbmRhcik7XG4gICAgcGFyc2VGb3JtYXRzID0gQXJyYXkuaXNBcnJheShwYXJzZUZvcm1hdHMpID8gcGFyc2VGb3JtYXRzIDogWyBwYXJzZUZvcm1hdHMgXTtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlRm9ybWF0cy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGRhdGUgPSBwYXJzZUV4YWN0KHBhcnNlVmFsdWUsIHBhcnNlRm9ybWF0c1tpZHhdLCBpbmZvKTtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGU7XG59XG4iLCJpbXBvcnQgeyBERUZBVUxUX0xPQ0FMRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL2NvbW1vbi9pcy1udW1iZXInO1xuaW1wb3J0IGRhdGVQYXR0ZXJuIGZyb20gJy4vZGF0ZS1wYXR0ZXJuJztcbmltcG9ydCBkYXRlTmFtZVR5cGUgZnJvbSAnLi9kYXRlLW5hbWUtdHlwZSc7XG5pbXBvcnQgeyBkYXRlRm9ybWF0UmVnRXhwLCBEQVRFX0ZJRUxEX01BUCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGxvY2FsZUluZm8gfSBmcm9tICcuLi9jbGRyJztcblxuY29uc3QgTkFNRV9UWVBFUyA9IHtcbiAgICBtb250aDoge1xuICAgICAgICB0eXBlOiAnbW9udGhzJyxcbiAgICAgICAgbWluTGVuZ3RoOiAzLFxuICAgICAgICBzdGFuZEFsb25lOiAnTCdcbiAgICB9LFxuXG4gICAgcXVhcnRlcjoge1xuICAgICAgICB0eXBlOiAncXVhcnRlcnMnLFxuICAgICAgICBtaW5MZW5ndGg6IDMsXG4gICAgICAgIHN0YW5kQWxvbmU6ICdxJ1xuICAgIH0sXG5cbiAgICB3ZWVrZGF5OiB7XG4gICAgICAgIHR5cGU6ICdkYXlzJyxcbiAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICBFOiAwLFxuICAgICAgICAgICAgYzogMyxcbiAgICAgICAgICAgIGU6IDNcbiAgICAgICAgfSxcbiAgICAgICAgc3RhbmRBbG9uZTogJ2MnXG4gICAgfSxcblxuICAgIGRheXBlcmlvZDoge1xuICAgICAgICB0eXBlOiAnZGF5UGVyaW9kcycsXG4gICAgICAgIG1pbkxlbmd0aDogMFxuICAgIH0sXG5cbiAgICBlcmE6IHtcbiAgICAgICAgdHlwZTogJ2VyYXMnLFxuICAgICAgICBtaW5MZW5ndGg6IDBcbiAgICB9XG59O1xuXG5jb25zdCBMSVRFUkFMID0gJ2xpdGVyYWwnO1xuXG5mdW5jdGlvbiBhZGRMaXRlcmFsKHBhcnRzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGxhc3RQYXJ0ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGxhc3RQYXJ0ICYmIGxhc3RQYXJ0LnR5cGUgPT09IExJVEVSQUwpIHtcbiAgICAgICAgbGFzdFBhcnQucGF0dGVybiArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IExJVEVSQUwsXG4gICAgICAgICAgICBwYXR0ZXJuOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzSG91cjEyKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybiA9PT0gJ2gnIHx8IHBhdHRlcm4gPT09ICdLJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BsaXREYXRlRm9ybWF0KGZvcm1hdCwgbG9jYWxlID0gREVGQVVMVF9MT0NBTEUpIHtcbiAgICBjb25zdCBpbmZvID0gbG9jYWxlSW5mbyhsb2NhbGUpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBkYXRlUGF0dGVybihmb3JtYXQsIGluZm8pO1xuICAgIGNvbnN0IHBhcnRzID0gW107XG4gICAgbGV0IGxhc3RJbmRleCA9IGRhdGVGb3JtYXRSZWdFeHAubGFzdEluZGV4ID0gMDtcbiAgICBsZXQgbWF0Y2ggPSBkYXRlRm9ybWF0UmVnRXhwLmV4ZWMocGF0dGVybik7XG5cbiAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbWF0Y2hbMF07XG5cbiAgICAgICAgaWYgKGxhc3RJbmRleCA8IG1hdGNoLmluZGV4KSB7XG4gICAgICAgICAgICBhZGRMaXRlcmFsKHBhcnRzLCBwYXR0ZXJuLnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnXCInKSB8fCB2YWx1ZS5zdGFydHNXaXRoKFwiJ1wiKSkge1xuICAgICAgICAgICAgYWRkTGl0ZXJhbChwYXJ0cywgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVyID0gdmFsdWVbMF07XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gREFURV9GSUVMRF9NQVBbc3BlY2lmaWVyXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiB2YWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdob3VyJykge1xuICAgICAgICAgICAgICAgIHBhcnQuaG91cjEyID0gaXNIb3VyMTIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IE5BTUVfVFlQRVNbdHlwZV07XG5cbiAgICAgICAgICAgIGlmIChuYW1lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IGlzTnVtYmVyKG5hbWVzLm1pbkxlbmd0aCkgPyBuYW1lcy5taW5MZW5ndGggOiBuYW1lcy5taW5MZW5ndGhbc3BlY2lmaWVyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhdHRlcm5MZW5ndGggPj0gbWluTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQubmFtZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBuYW1lcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVR5cGU6IGRhdGVOYW1lVHlwZShwYXR0ZXJuTGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YW5kQWxvbmU6IG5hbWVzLnN0YW5kQWxvbmUgPT09IHNwZWNpZmllclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmRleCA9IGRhdGVGb3JtYXRSZWdFeHAubGFzdEluZGV4O1xuICAgICAgICBtYXRjaCA9IGRhdGVGb3JtYXRSZWdFeHAuZXhlYyhwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4IDwgcGF0dGVybi5sZW5ndGgpIHtcbiAgICAgICAgYWRkTGl0ZXJhbChwYXJ0cywgcGF0dGVybi5zdWJzdHJpbmcobGFzdEluZGV4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRzO1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4vZGF0ZXMnO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSAnLi9udW1iZXJzJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9jb21tb24vaXMtZGF0ZSc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9jb21tb24vaXMtbnVtYmVyJztcblxuY29uc3QgZm9ybWF0UmVnRXhwID0gL1xceyhcXGQrKSg6W15cXH1dKyk/XFx9L2c7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSwgZm9ybWF0LCBsb2NhbGUpIHtcbiAgICBpZiAoZm9ybWF0KSB7XG4gICAgICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0RGF0ZSh2YWx1ZSwgZm9ybWF0LCBsb2NhbGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE51bWJlcih2YWx1ZSwgZm9ybWF0LCBsb2NhbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IEVNUFRZO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGZvcm1hdCwgdmFsdWVzLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbihtYXRjaCwgaW5kZXgsIHBsYWNlaG9sZGVyRm9ybWF0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1twYXJzZUludChpbmRleCwgMTApXTtcblxuICAgICAgICByZXR1cm4gdG9TdHJpbmcodmFsdWUsIHBsYWNlaG9sZGVyRm9ybWF0ID8gcGxhY2Vob2xkZXJGb3JtYXQuc3Vic3RyaW5nKDEpIDogRU1QVFksIGxvY2FsZSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiY29uc3QiLCJsZXQiLCJsb2NhbGVJbmZvIiwicGF0dGVybiIsImFyZ3VtZW50cyIsIk5vV2Vla0RhdGEiLCJmb3JtYXRSZWdFeHAiLCJpZHgiLCJQTEFDRUhPTERFUiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBQSxJQUFNLFdBQVcsR0FBRztJQUNoQixFQUFFLEVBQUU7UUFDQSxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRTtZQUNOLE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELFFBQVEsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLElBQUk7UUFDZixPQUFPLEVBQUU7WUFDTCxPQUFPLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLFNBQVMsRUFBRSxHQUFHO2dCQUNkLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixzQkFBc0IsRUFBRSxHQUFHO2dCQUMzQixRQUFRLEVBQUUsR0FBRztnQkFDYixRQUFRLEVBQUUsR0FBRztnQkFDYixHQUFHLEVBQUUsS0FBSztnQkFDVixhQUFhLEVBQUUsR0FBRzthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxRQUFRLEVBQUU7b0JBQ04sR0FBRztpQkFDTjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsQ0FBQztpQkFDSjthQUNKO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRTtvQkFDTixLQUFLO2lCQUNSO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRTtvQkFDTixJQUFJO2lCQUNQO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxDQUFDO2lCQUNKO2FBQ0o7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sUUFBUSxFQUFFO29CQUNOLElBQUk7aUJBQ1A7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLENBQUM7aUJBQ0o7Z0JBQ0QsdUJBQXVCLEVBQUUsS0FBSztnQkFDOUIseUJBQXlCLEVBQUUsS0FBSzthQUNuQztZQUNELFVBQVUsRUFBRTtnQkFDUixHQUFHLEVBQUU7b0JBQ0QsV0FBVyxFQUFFLGVBQWU7b0JBQzVCLHVCQUF1QixFQUFFLGVBQWU7b0JBQ3hDLHlCQUF5QixFQUFFLGdCQUFnQjtvQkFDM0MsTUFBTSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUNELEdBQUcsRUFBRTtvQkFDRCxXQUFXLEVBQUUsTUFBTTtvQkFDbkIsdUJBQXVCLEVBQUUsTUFBTTtvQkFDL0IseUJBQXlCLEVBQUUsT0FBTztvQkFDbEMsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsbUJBQW1CLEVBQUUsR0FBRztpQkFDM0I7Z0JBQ0QsR0FBRyxFQUFFO29CQUNELFdBQVcsRUFBRSxXQUFXO29CQUN4Qix1QkFBdUIsRUFBRSxXQUFXO29CQUNwQyx5QkFBeUIsRUFBRSxZQUFZO29CQUN2QyxNQUFNLEVBQUUsR0FBRztvQkFDWCxtQkFBbUIsRUFBRSxHQUFHO2lCQUMzQjthQUNKO1lBQ0QsY0FBYyxFQUFFLEtBQUs7WUFDckIsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRTtvQkFDTixJQUFJO29CQUNKLE1BQU07aUJBQ1Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLENBQUM7aUJBQ0o7YUFDSjtTQUNKO1FBQ0QsUUFBUSxFQUFFO1lBQ04sU0FBUyxFQUFFLFFBQVE7WUFDbkIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsUUFBUSxFQUFFO2dCQUNOLENBQUMsRUFBRSxPQUFPO2dCQUNWLENBQUMsRUFBRSxpQkFBaUI7Z0JBQ3BCLENBQUMsRUFBRSxPQUFPO2dCQUNWLENBQUMsRUFBRSxRQUFRO2dCQUNYLENBQUMsRUFBRSxPQUFPO2dCQUNWLENBQUMsRUFBRSxRQUFRO2dCQUNYLENBQUMsRUFBRSwyQkFBMkI7Z0JBQzlCLENBQUMsRUFBRSxjQUFjO2dCQUNqQixDQUFDLEVBQUUsaUJBQWlCO2dCQUNwQixDQUFDLEVBQUUsUUFBUTtnQkFDWCxDQUFDLEVBQUUsV0FBVztnQkFDZCxDQUFDLEVBQUUsK0JBQStCO2dCQUNsQyxDQUFDLEVBQUUsZ0NBQWdDO2FBQ3RDO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsY0FBYztnQkFDcEIsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLEtBQUssRUFBRSxVQUFVO2dCQUNqQixnQkFBZ0IsRUFBRTtvQkFDZCxFQUFFLEVBQUUsS0FBSztvQkFDVCxHQUFHLEVBQUUsUUFBUTtvQkFDYixJQUFJLEVBQUUsV0FBVztvQkFDakIsQ0FBQyxFQUFFLEdBQUc7b0JBQ04sQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLEtBQUssRUFBRSxhQUFhO29CQUNwQixFQUFFLEVBQUUsS0FBSztvQkFDVCxHQUFHLEVBQUUsVUFBVTtvQkFDZixHQUFHLEVBQUUsU0FBUztvQkFDZCxJQUFJLEVBQUUsYUFBYTtvQkFDbkIsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLEVBQUUsRUFBRSxLQUFLO29CQUNULEtBQUssRUFBRSxTQUFTO29CQUNoQixNQUFNLEVBQUUsWUFBWTtvQkFDcEIsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxJQUFJO29CQUNQLEVBQUUsRUFBRSxRQUFRO29CQUNaLEVBQUUsRUFBRSxPQUFPO29CQUNYLEdBQUcsRUFBRSxXQUFXO29CQUNoQixHQUFHLEVBQUUsVUFBVTtvQkFDZixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLEdBQUcsRUFBRSxVQUFVO29CQUNmLEdBQUcsRUFBRSxTQUFTO29CQUNkLENBQUMsRUFBRSxHQUFHO29CQUNOLEVBQUUsRUFBRSxLQUFLO29CQUNULEdBQUcsRUFBRSxRQUFRO29CQUNiLEdBQUcsRUFBRSxLQUFLO29CQUNWLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxVQUFVO29CQUNqQixLQUFLLEVBQUUsUUFBUTtvQkFDZixpQkFBaUIsRUFBRSxvQkFBb0I7b0JBQ3ZDLG1CQUFtQixFQUFFLG9CQUFvQjtvQkFDekMsRUFBRSxFQUFFLE9BQU87b0JBQ1gsQ0FBQyxFQUFFLEdBQUc7b0JBQ04sRUFBRSxFQUFFLEtBQUs7b0JBQ1QsR0FBRyxFQUFFLE9BQU87b0JBQ1osSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxVQUFVO29CQUNqQixNQUFNLEVBQUUsYUFBYTtvQkFDckIsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsY0FBYyxFQUFFLGlCQUFpQjtvQkFDakMsZ0JBQWdCLEVBQUUsaUJBQWlCO2lCQUN0QzthQUNKO1lBQ0QsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsV0FBVztnQkFDbkIsS0FBSyxFQUFFLFFBQVE7YUFDbEI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixLQUFLLEVBQUUsUUFBUTthQUNsQjtZQUNELElBQUksRUFBRTtnQkFDRixNQUFNLEVBQUU7b0JBQ0osV0FBVyxFQUFFO3dCQUNULEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ1I7b0JBQ0QsTUFBTSxFQUFFO3dCQUNKLEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7cUJBQ047b0JBQ0QsS0FBSyxFQUFFO3dCQUNILElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7cUJBQ1A7b0JBQ0QsSUFBSSxFQUFFO3dCQUNGLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixTQUFTO3dCQUNULFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixRQUFRO3dCQUNSLFVBQVU7cUJBQ2I7aUJBQ0o7Z0JBQ0QsYUFBYSxFQUFFO29CQUNYLFdBQVcsRUFBRTt3QkFDVCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNSO29CQUNELE1BQU0sRUFBRTt3QkFDSixHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3FCQUNOO29CQUNELEtBQUssRUFBRTt3QkFDSCxJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3FCQUNQO29CQUNELElBQUksRUFBRTt3QkFDRixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLFVBQVU7d0JBQ1YsUUFBUTt3QkFDUixVQUFVO3FCQUNiO2lCQUNKO2FBQ0o7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osTUFBTSxFQUFFO29CQUNKLFdBQVcsRUFBRTt3QkFDVCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDUjtvQkFDRCxNQUFNLEVBQUU7d0JBQ0osR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7cUJBQ047b0JBQ0QsSUFBSSxFQUFFO3dCQUNGLFNBQVM7d0JBQ1QsVUFBVTt3QkFDVixPQUFPO3dCQUNQLE9BQU87d0JBQ1AsS0FBSzt3QkFDTCxNQUFNO3dCQUNOLE1BQU07d0JBQ04sUUFBUTt3QkFDUixXQUFXO3dCQUNYLFNBQVM7d0JBQ1QsVUFBVTt3QkFDVixVQUFVO3FCQUNiO2lCQUNKO2dCQUNELGFBQWEsRUFBRTtvQkFDWCxXQUFXLEVBQUU7d0JBQ1QsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ1I7b0JBQ0QsTUFBTSxFQUFFO3dCQUNKLEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3FCQUNOO29CQUNELElBQUksRUFBRTt3QkFDRixTQUFTO3dCQUNULFVBQVU7d0JBQ1YsT0FBTzt3QkFDUCxPQUFPO3dCQUNQLEtBQUs7d0JBQ0wsTUFBTTt3QkFDTixNQUFNO3dCQUNOLFFBQVE7d0JBQ1IsV0FBVzt3QkFDWCxTQUFTO3dCQUNULFVBQVU7d0JBQ1YsVUFBVTtxQkFDYjtpQkFDSjthQUNKO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLE1BQU0sRUFBRTtvQkFDSixXQUFXLEVBQUU7d0JBQ1QsSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTtxQkFDUDtvQkFDRCxNQUFNLEVBQUU7d0JBQ0osR0FBRzt3QkFDSCxHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRztxQkFDTjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0YsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsYUFBYTtxQkFDaEI7aUJBQ0o7Z0JBQ0QsYUFBYSxFQUFFO29CQUNYLFdBQVcsRUFBRTt3QkFDVCxJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3FCQUNQO29CQUNELE1BQU0sRUFBRTt3QkFDSixHQUFHO3dCQUNILEdBQUc7d0JBQ0gsR0FBRzt3QkFDSCxHQUFHO3FCQUNOO29CQUNELElBQUksRUFBRTt3QkFDRixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3FCQUNoQjtpQkFDSjthQUNKO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLE1BQU0sRUFBRTtvQkFDSixXQUFXLEVBQUU7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLEVBQUUsRUFBRSxJQUFJO3dCQUNSLGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLElBQUksRUFBRSxNQUFNO3dCQUNaLEVBQUUsRUFBRSxJQUFJO3dCQUNSLGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFVBQVUsRUFBRSxrQkFBa0I7d0JBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLE1BQU0sRUFBRSxVQUFVO3FCQUNyQjtvQkFDRCxNQUFNLEVBQUU7d0JBQ0osUUFBUSxFQUFFLElBQUk7d0JBQ2QsRUFBRSxFQUFFLEdBQUc7d0JBQ1AsZ0JBQWdCLEVBQUUsSUFBSTt3QkFDdEIsSUFBSSxFQUFFLEdBQUc7d0JBQ1QsRUFBRSxFQUFFLEdBQUc7d0JBQ1AsZ0JBQWdCLEVBQUUsSUFBSTt3QkFDdEIsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsVUFBVSxFQUFFLGtCQUFrQjt3QkFDOUIsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsTUFBTSxFQUFFLFVBQVU7cUJBQ3JCO29CQUNELElBQUksRUFBRTt3QkFDRixRQUFRLEVBQUUsVUFBVTt3QkFDcEIsRUFBRSxFQUFFLElBQUk7d0JBQ1IsZ0JBQWdCLEVBQUUsSUFBSTt3QkFDdEIsSUFBSSxFQUFFLE1BQU07d0JBQ1osRUFBRSxFQUFFLElBQUk7d0JBQ1IsZ0JBQWdCLEVBQUUsSUFBSTt3QkFDdEIsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsVUFBVSxFQUFFLGtCQUFrQjt3QkFDOUIsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsTUFBTSxFQUFFLFVBQVU7cUJBQ3JCO2lCQUNKO2dCQUNELGFBQWEsRUFBRTtvQkFDWCxXQUFXLEVBQUU7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLEVBQUUsRUFBRSxJQUFJO3dCQUNSLGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLElBQUksRUFBRSxNQUFNO3dCQUNaLEVBQUUsRUFBRSxJQUFJO3dCQUNSLGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixVQUFVLEVBQUUsV0FBVzt3QkFDdkIsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLE1BQU0sRUFBRSxPQUFPO3FCQUNsQjtvQkFDRCxNQUFNLEVBQUU7d0JBQ0osUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLEVBQUUsRUFBRSxJQUFJO3dCQUNSLGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLElBQUksRUFBRSxNQUFNO3dCQUNaLEVBQUUsRUFBRSxJQUFJO3dCQUNSLGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixVQUFVLEVBQUUsV0FBVzt3QkFDdkIsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLE1BQU0sRUFBRSxPQUFPO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0YsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLEVBQUUsRUFBRSxJQUFJO3dCQUNSLGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLElBQUksRUFBRSxNQUFNO3dCQUNaLEVBQUUsRUFBRSxJQUFJO3dCQUNSLGdCQUFnQixFQUFFLElBQUk7d0JBQ3RCLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixVQUFVLEVBQUUsV0FBVzt3QkFDdkIsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLE1BQU0sRUFBRSxPQUFPO3FCQUNsQjtpQkFDSjthQUNKO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLE1BQU0sRUFBRTtvQkFDSixJQUFJLEVBQUU7d0JBQ0YsR0FBRyxFQUFFLGVBQWU7d0JBQ3BCLEdBQUcsRUFBRSxhQUFhO3dCQUNsQixlQUFlLEVBQUUsbUJBQW1CO3dCQUNwQyxlQUFlLEVBQUUsWUFBWTtxQkFDaEM7b0JBQ0QsV0FBVyxFQUFFO3dCQUNULEdBQUcsRUFBRSxJQUFJO3dCQUNULEdBQUcsRUFBRSxJQUFJO3dCQUNULGVBQWUsRUFBRSxLQUFLO3dCQUN0QixlQUFlLEVBQUUsSUFBSTtxQkFDeEI7b0JBQ0QsTUFBTSxFQUFFO3dCQUNKLEdBQUcsRUFBRSxHQUFHO3dCQUNSLEdBQUcsRUFBRSxHQUFHO3dCQUNSLGVBQWUsRUFBRSxLQUFLO3dCQUN0QixlQUFlLEVBQUUsSUFBSTtxQkFDeEI7aUJBQ0o7YUFDSjtZQUNELFVBQVUsRUFBRTtnQkFDUixHQUFHLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxLQUFLO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsS0FBSyxFQUFFLE1BQU07b0JBQ2IsTUFBTSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNELEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxLQUFLO2lCQUNoQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLEtBQUs7b0JBQ1osTUFBTSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxJQUFJLEVBQUUsaUJBQWlCO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELElBQUksRUFBRTtvQkFDRixJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRSxNQUFNO2lCQUNqQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsTUFBTSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNELElBQUksRUFBRTtvQkFDRixJQUFJLEVBQUUsV0FBVztpQkFDcEI7YUFDSjtTQUNKO0tBQ0o7SUFDRCxZQUFZLEVBQUU7UUFDVixhQUFhLEVBQUU7WUFDWCxFQUFFLEVBQUUsWUFBWTtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLE1BQU0sRUFBRTtnQkFDSixFQUFFLEVBQUU7b0JBQ0E7d0JBQ0ksR0FBRyxFQUFFOzRCQUNELEtBQUssRUFBRSxZQUFZO3lCQUN0QjtxQkFDSjtpQkFDSjthQUNKO1NBQ0o7UUFDRCxRQUFRLEVBQUU7WUFDTixRQUFRLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLEtBQUs7YUFDWjtZQUNELFlBQVksRUFBRTtnQkFDVixLQUFLLEVBQUUsS0FBSzthQUNmO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxLQUFLO2FBQ2Y7U0FDSjtLQUNKO0NBQ0osQ0FBQyxBQUNGOztBQzNqQmUsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0lBQ3BDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDOzs7QUNEckM7OztBQUdBLG1CQUFlO0lBQ1gsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxZQUFZLEVBQUUsZ0ZBQWdGO0lBQzlGLHdCQUF3QixFQUFFLHVFQUF1RTtJQUNqRyxrQkFBa0IsRUFBRSxtQ0FBbUM7SUFDdkQsbUJBQW1CLEVBQUUsc0pBQXNKO0lBQzNLLFdBQVcsRUFBRSxnRkFBZ0Y7SUFDN0YsWUFBWSxFQUFFLG1GQUFtRjtJQUNqRyxZQUFZLEVBQUUsaUpBQWlKO0lBQy9KLGlCQUFpQixFQUFFLHlIQUF5SDtJQUM1SSxrQkFBa0IsRUFBRSx1RkFBdUY7Q0FDOUcsQ0FBQzs7QUNaRkEsSUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDOztBQUVwQyxJQUFNLFNBQVMsR0FBQyxrQkFDRCxDQUFDLEdBQUEsRUFBbUI7UUFBakIsSUFBSSxZQUFFO1FBQUEsT0FBTzs7SUFDM0IsSUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUN2QixNQUFVLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7S0FDNUU7O0lBRUwsSUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsSUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDMUIsQ0FBQTs7QUFFTCxvQkFBSSxhQUFhLDZCQUFZOzs7O0lBQ3pCLElBQVUsYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFFMUMsSUFBVSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsU0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO1FBQ25GLE9BQVcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM3QyxDQUFDLENBQUM7O0lBRVAsT0FBVyxDQUFBLENBQUcsSUFBSSxDQUFDLElBQUksQ0FBQSxPQUFHLEdBQUUsZ0JBQWdCLENBQUUsQ0FBQztDQUM5QyxDQUFBOztBQUVMLG9CQUFJLEtBQUsscUJBQVk7Ozs7SUFDakIsT0FBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDaEQsQ0FBQTs7QUFHTEEsSUFBTSxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUEsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUNoRCxDQUFDOztBQUVGQSxJQUFNLFlBQVksR0FBRyxTQUFTLE1BQU0sRUFBRTtJQUNsQ0EsSUFBTSxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsSUFBSSxFQUFFO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLE1BQUEsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDO0tBQ2YsQ0FBQzs7SUFFRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUNwRCxDQUFDOztBQUVGQSxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQUFFMUMsQUFJRTs7QUM1Q0YsU0FBUyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0lBQzdDQSxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDQSxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUJBLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QkEsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUUzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDN0w7O0FBRUQsU0FBUyxjQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtJQUN4Q0EsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7O0lBRXRELEtBQUtDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM1Q0EsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7O0lBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDekIsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbEM7Q0FDSjs7QUFFRCxBQUFPRCxJQUFNLElBQUksR0FBRyxXQUFXLENBQUM7O0FBRWhDLEFBQU8sU0FBUyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2xDQyxJQUFJLElBQUksQ0FBQztJQUNULElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0IsTUFBTTtRQUNILElBQUksR0FBRyxNQUFNLENBQUM7S0FDakI7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNmOztBQUVELEFBQU8sU0FBUyxVQUFVLENBQUMsTUFBTSxFQUFFO0lBQy9CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdkI7O0lBRURELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ3RELElBQUksYUFBYSxFQUFFO1FBQ2ZBLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaENBLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQkEsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQ0EsSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwREEsSUFBTSxJQUFJLEdBQUcsUUFBUSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkUsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7O0lBRUQsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUN2Qzs7QUMxRE1BLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUNqQyxBQUFPQSxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDbkMsQUFBT0EsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO0FBQ3ZDLEFBQU9BLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUNqQyxBQUFPQSxJQUFNLFVBQVUsR0FBRyxZQUFZLENBQUM7O0FBRXZDLEFBQU9BLElBQU0sb0JBQW9CLEdBQUcsR0FBRyxDQUFDO0FBQ3hDLEFBQU9BLElBQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0FBQ3ZDLEFBQU9BLElBQU0sa0JBQWtCLEdBQUcsR0FBRyxDQUFDOztBQUV0QyxBQUFPQSxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7QUFDbEMsQUFBT0EsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDOztBQUVuQyxBQUFPQSxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDekIsQUFBT0EsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUV4QixBQUFPQSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7O0FDYm5DQSxJQUFNLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDO0FBQ3pEQSxJQUFNLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDOztBQUV6REEsSUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDO0FBQ25DQSxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQzs7QUFFaEMsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFO0lBQzFCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztJQUU1QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0NBQ3JJOztBQUVELFNBQVMsWUFBWSxDQUFDLE9BQU8sRUFBRTtJQUMzQixhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzs7SUFFNUJBLElBQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RkEsSUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVsQ0EsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsS0FBSyxFQUFFO1FBQzFFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztLQUN2QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7O0lBRWIsT0FBTyxTQUFTLENBQUM7Q0FDcEI7O0FBRUQsU0FBUyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFO0lBQzdELEtBQUtDLElBQUksS0FBSyxJQUFJLGVBQWUsRUFBRTtRQUMvQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDakMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3hIO0tBQ0o7Q0FDSjs7QUFFRCxBQUFlLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDbERELElBQU1FLGFBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaENGLElBQU0sT0FBTyxHQUFHRSxhQUFVLENBQUMsT0FBTyxHQUFHQSxhQUFVLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUM5RCxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hDLEtBQUtELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNwQixJQUFJLEtBQUssS0FBSyxvQkFBb0IsRUFBRTtZQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUM3Q0QsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDbkVBLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUNiLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ2pDLENBQUM7WUFDRixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4Ryx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRztvQkFDbEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzlDLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUztpQkFDdEMsQ0FBQzthQUNMLE1BQU07Z0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEQ7U0FDSixNQUFNLElBQUksS0FBSyxLQUFLLFlBQVksRUFBRTtZQUMvQixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztLQUNKOzs7QUM1RExBLElBQU0sc0JBQXNCLEdBQUc7SUFDM0IsQ0FBQyxFQUFFLCtCQUErQjtJQUNsQyxDQUFDLEVBQUUsZ0NBQWdDO0NBQ3RDLENBQUM7O0FBRUZBLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QkEsSUFBTSxVQUFVLEdBQUcsRUFBRSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDOztBQUVsREEsSUFBTSxZQUFZLEdBQUc7SUFDakIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDaEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN4RCxDQUFDLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3pELENBQUMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDeEQsQ0FBQyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN6RCxDQUFDLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUM3RCxDQUFDLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ25GLENBQUMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUU7SUFDcEYsQ0FBQyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDakMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUU7Q0FDckMsQ0FBQzs7QUFFRixTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7SUFDbEJDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQkEsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLEtBQUtBLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUN6Q0EsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUFFRCxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDbkNELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixLQUFLQyxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7UUFDekJBLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsS0FBS0EsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDQSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7SUFDdkJELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQkEsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbENBLElBQU0sVUFBVSxHQUFHO1FBQ2YsT0FBTyxFQUFFLGFBQWE7UUFDdEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFFBQVE7S0FDdEIsQ0FBQzs7SUFFRixLQUFLQyxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7UUFDNUJBLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzVDOztJQUVELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQUVELFNBQVMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUN6Q0QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUM3QyxjQUFjLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxjQUFjLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxjQUFjLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RCxjQUFjLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBRXhFLGNBQWMsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNwRDs7QUFFRCxTQUFTLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDNUNBLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDN0NBLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQzs7SUFFdEIsS0FBS0MsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQ3RCLE9BQXdDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFBbkQsSUFBQSxTQUFTO1FBQWUsbUVBQUEsTUFBTSxDQUFoQztRQUNORCxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDQSxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDOztRQUU5QyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFOztRQUUvQixTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7S0FDckM7O0lBRUQsY0FBYyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDMUM7O0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0lBQzFDQSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7O0lBRWxCLEtBQUtDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUNyREEsSUFBSSxNQUFNLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzlCQSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDdkIsS0FBS0EsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hCOztJQUVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUMzQjs7QUFFRCxTQUFTLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDNUNELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDM0NBLElBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztJQUU1QyxRQUFRLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQUVoRixLQUFLQyxJQUFJLE9BQU8sSUFBSSxZQUFZLEVBQUU7UUFDOUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM1RTs7SUFFRCxLQUFLQSxJQUFJRSxTQUFPLElBQUksc0JBQXNCLEVBQUU7UUFDeEMsUUFBUSxDQUFDQSxTQUFPLENBQUMsR0FBRyxzQkFBc0IsQ0FBQ0EsU0FBTyxDQUFDLENBQUM7S0FDdkQ7O0lBRURILElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDakQsWUFBWSxDQUFDLGVBQWUsR0FBRztRQUMzQixJQUFJLEVBQUUsZUFBZSxDQUFDLElBQUk7UUFDMUIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJO1FBQzFCLE1BQU0sRUFBRSxlQUFlLENBQUMsTUFBTTtRQUM5QixLQUFLLEVBQUUsZUFBZSxDQUFDLEtBQUs7UUFDNUIsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLGdCQUFnQjtLQUNyRCxDQUFDO0lBQ0YsWUFBWSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ2hELFlBQVksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztDQUNuRDs7O0FBR0QsQUFBZSxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDbkRBLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDckUsS0FBS0MsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ3BCLElBQUksS0FBSyxLQUFLLGVBQWUsRUFBRTtZQUMzQixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDM0MsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDO1NBQ3RELE1BQU0sSUFBSSxLQUFLLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDdkQsb0JBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRCxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BELE1BQU0sSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7S0FDSjtDQUNKOztBQy9JRCxTQUFTLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDdkNELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ3REQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLElBQUksYUFBYSxFQUFFO1FBQ2ZELElBQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxVQUFVLEVBQUU7WUFDWixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQztLQUNKOztJQUVELElBQUksUUFBUSxFQUFFO1FBQ1YsS0FBS0MsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM5Q0QsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO1NBQ0o7S0FDSjs7SUFFREEsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7SUFFNUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ1pBLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbEM7Q0FDSjs7QUFFRCxBQUFlLFNBQVMsZUFBZSxDQUFDLElBQUksRUFBRTtJQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3pCOztJQUVEQSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3ZCQSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9CQyxJQUFJLFNBQVMsQ0FBQzs7SUFFZCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1FBQ2hDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO0tBQ2xDLE1BQU07UUFDSCxTQUFTLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2pEOztJQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztJQUUzQixPQUFPLFNBQVMsQ0FBQztDQUNwQjs7QUMxQ0QsU0FBUyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtJQUM5QixLQUFLQSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDcEIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3JCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDeEMsTUFBTSxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUU7WUFDMUIsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0o7Q0FDSjs7QUFFRCxBQUFlLFNBQVMsSUFBSSxHQUFHOzs7SUFDM0JELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDaEMsS0FBS0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbkNBLElBQUksS0FBSyxHQUFHRyxXQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ1pILElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDQSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCQSxJQUFJQyxhQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBRW5EQSxhQUFVLENBQUMsSUFBSSxHQUFHQSxhQUFVLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztZQUM1Q0EsYUFBVSxDQUFDLFFBQVEsR0FBR0EsYUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDOztZQUUzRCxlQUFlLENBQUNBLGFBQVUsQ0FBQyxDQUFDO1lBQzVCLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDM0IsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUc7b0JBQ3pCLFFBQVEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRO29CQUM5QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWTtvQkFDdEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVU7aUJBQ3JELENBQUM7YUFDTCxNQUFNO2dCQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDeEQ7U0FDSjtLQUNKO0NBQ0o7O0FDdkNjLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRTtJQUNsQ0YsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QkEsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ3BCQSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ2pFLFlBQVksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDcEc7O0lBRURBLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7O0lBRTdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUUxQixJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzRDs7O0FDWlUsU0FBUyxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQXVCLEVBQUU7bUNBQW5CLEdBQUcsY0FBYzs7SUFDbEVBLElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQ0EsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNiLE1BQU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3pDOztJQUVEQSxJQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFFckQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNuRTs7QUNYRCxTQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDckJBLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixLQUFLQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUN2QztJQUNELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQUVELFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRTtJQUN0QkQsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLEtBQUtDLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtRQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFO0lBQ3JCQSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckUsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsQUFBZSxTQUFTLGVBQWUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO0lBQ3JELElBQVEsSUFBSTtJQUFFLElBQUEsUUFBUTtJQUFFLElBQUEsVUFBVTtJQUFFLElBQUEsS0FBSyxpQkFBbkM7SUFDTkQsSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DQSxJQUFNLFVBQVUsR0FBRyxVQUFVLEdBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQztJQUN6REEsSUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUM1REEsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwREMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFO1FBQ2xCLE1BQU0sR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzNFO0lBQ0QsT0FBTyxNQUFNLENBQUM7OztBQ2xDSCxTQUFTLGNBQWMsQ0FBQyxLQUFLLEVBQUU7SUFDMUNELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0JBLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcENBLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDQSxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUVuQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDckM7Ozs7QUNBRCxJQUNJLFVBQVU7QUFDVixJQUFBLGlCQUFpQjtBQUNqQixJQUFBLHNCQUFzQjtBQUN0QixJQUFBLGdCQUFnQjtBQUNoQixJQUFBLGVBQWUsMEJBTGI7O0FBUU5BLElBQU0sMEJBQTBCLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDQSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDeEJBLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDOztBQUVwQ0EsSUFBTSxpQkFBaUIsR0FBRztJQUN0QixLQUFLLEVBQUUsS0FBSztJQUNaLEtBQUssRUFBRSxLQUFLOztDQUVmLENBQUM7O0FBRUYsU0FBUyxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7SUFDdkRBLElBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQ0EsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDM0MsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNiLElBQUksY0FBYyxFQUFFO1lBQ2hCLE1BQU0sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCOztRQUVELE9BQU87S0FDVjs7SUFFREEsSUFBTSxtQkFBbUIsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBRWpELElBQUksQ0FBQyxtQkFBbUIsRUFBRTtRQUN0QixJQUFJLGNBQWMsRUFBRTtZQUNoQixNQUFNLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25DOztRQUVELE9BQU87S0FDVjs7SUFFRCxPQUFPLG1CQUFtQixDQUFDO0NBQzlCOztBQUVELFNBQVMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDMUIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7Q0FDOUI7O0FBRUQsU0FBUyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7SUFDdENDLElBQUksZ0JBQWdCLEVBQUUscUJBQXFCLENBQUM7SUFDNUNBLElBQUksZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUM7O0lBRTNDLEtBQUtBLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3BERCxJQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2Q0EsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0Q0EsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxLQUFLLHFCQUFxQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1hBLElBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxvQkFBb0IsSUFBSSxvQkFBb0IsR0FBRyxjQUFjLEVBQUU7b0JBQ2hFLGdCQUFnQixHQUFHLElBQUksQ0FBQztvQkFDeEIsb0JBQW9CLEdBQUcsY0FBYyxDQUFDO2lCQUN6QzthQUNKLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQkEsSUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0NBLElBQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEdBQUcsT0FBTyxJQUFJLHFCQUFxQixDQUFDLElBQUksR0FBRyxTQUFTLEVBQUU7b0JBQ3hHLGdCQUFnQixHQUFHLElBQUksQ0FBQztvQkFDeEIscUJBQXFCLEdBQUc7d0JBQ3BCLElBQUksRUFBRSxTQUFTO3dCQUNmLEVBQUUsRUFBRSxPQUFPO3FCQUNkLENBQUM7aUJBQ0w7YUFDSjtTQUNKO0tBQ0o7O0lBRUQsT0FBTyxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQztDQUMvQzs7QUFFRCxBQUFPLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFxQixFQUFFO21EQUFULEdBQUcsSUFBSTs7SUFDcEVBLElBQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDZixPQUFPO0tBQ1Y7O0lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7UUFDeEJBLElBQU0sUUFBUSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDOUIsS0FBS0MsSUFBSSxLQUFLLElBQUksWUFBWSxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlCLFlBQVksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQ3BDOztJQUVELE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztDQUNoQzs7QUFFRCxBQUFPLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUU7SUFDN0MsSUFBUSxLQUFLO0lBQUUsSUFBQSxRQUFRO0lBQW9CLG1HQUFBLE1BQU0sQ0FBM0M7O0lBRU4sSUFBSSxlQUFlLEtBQUssTUFBTSxFQUFFO1FBQzVCLE9BQU8sUUFBUSxDQUFDO0tBQ25COztJQUVERCxJQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3REMsSUFBSSxNQUFNLENBQUM7O0lBRVgsSUFBSSxlQUFlLEtBQUssTUFBTSxFQUFFO1FBQzVCLE1BQU0sR0FBRyxZQUFZLENBQUMsbUJBQW1CLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdEUsTUFBTTtRQUNILElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDM0MsTUFBTSxHQUFHLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQ3BELE1BQU07WUFDSCxNQUFNLEdBQUcsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDbEQ7S0FDSjs7SUFFRCxPQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUFFRCxBQUFPLFNBQVMsdUJBQXVCLENBQUMsSUFBSSxFQUFFO0lBQzFDQSxJQUFJLHFCQUFxQixHQUFHLDBCQUEwQixDQUFDO0lBQ3ZEQSxJQUFJLHFCQUFxQixHQUFHLDBCQUEwQixDQUFDOztJQUV2REQsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFFakYsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTtRQUNoQyxxQkFBcUIsR0FBRyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNuRjs7SUFFRCxPQUFPO1FBQ0gscUJBQXFCLEVBQUUscUJBQXFCO1FBQzVDLHFCQUFxQixFQUFFLHFCQUFxQjtLQUMvQyxDQUFDO0NBQ0w7O0FBRUQsQUFBTyxTQUFTLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxjQUFxQixFQUFFO21EQUFULEdBQUcsSUFBSTs7SUFDbEUsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUM5QixPQUFPLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3ZDOztJQUVEQSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNwRCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2YsSUFBSSxjQUFjLEVBQUU7WUFDaEIsTUFBTSxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4Qzs7UUFFRCxPQUFPO0tBQ1Y7O0lBRURBLElBQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFFeEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBQ25CLElBQUksY0FBYyxFQUFFO1lBQ2hCLE1BQU0sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDOztRQUVELE9BQU87S0FDVjs7SUFFREEsSUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0lBRXRELE9BQU8sWUFBWSxDQUFDO0NBQ3ZCOztBQUVELEFBQU8sU0FBUyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRTtJQUNuREEsSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DQSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztJQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtRQUN6QkEsSUFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDOztRQUU5RSxJQUFJLENBQUMsUUFBUSxJQUFJLGNBQWMsRUFBRTtZQUM3QixNQUFNLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFDOztRQUVELE9BQU8sQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO0tBQ3JDOztJQUVELE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQztDQUNqQzs7QUN6TE1BLElBQU0sWUFBWSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7O0FBRWhGLEFBQU9BLElBQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDOztBQ0d2QyxJQUFRLFVBQVU7QUFBRSxJQUFBLFVBQVUscUJBQXhCOztBQUVOLEFBQWUsU0FBUyxRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ3JDQSxJQUFNLElBQUksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBRW5DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN4Qjs7SUFFREEsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDNUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNYLE1BQU0sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzVCOztJQUVEQSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7SUFFbEcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNYLE1BQU0sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzVCOztJQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFFL0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0NBQ3hCOztBQ3ZCRCxJQUFRSyxZQUFVLHFCQUFaOztBQUVOLEFBQWUsU0FBUyxZQUFZLENBQUMsTUFBTSxFQUFFO0lBQ3pDTCxJQUFNLElBQUksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBRW5DLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDNUI7O0lBRURBLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDWCxNQUFNSyxZQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDNUI7O0lBRURMLElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4Q0EsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0ZBLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztJQUVyRixJQUFJLENBQUMsWUFBWSxHQUFHO1FBQ2hCLEtBQUssRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNsQyxHQUFHLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7S0FDakMsQ0FBQzs7SUFFRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7Q0FDNUI7O0FDNUJjLFNBQVMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUMxQ0EsSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUVuQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOzs7QUNIakIsU0FBUyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsT0FBWSxFQUFFO3FDQUFQLEdBQUcsRUFBRTs7SUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFDbkIsT0FBTyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2pEOztJQUVEQSxJQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztJQUUvQyxPQUFPLE9BQU8sQ0FBQztDQUNsQjs7QUNWYyxTQUFTLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ3BFQSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNyQ0EsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckRBLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0NDLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7SUFFbkNBLElBQUksVUFBVSxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsR0FBRyxZQUFZLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzs7SUFFOURBLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xEQSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDcEJELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0lBRXJDLElBQUksYUFBYSxJQUFJLFNBQVMsRUFBRTtRQUM1QkMsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ3hCQSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7O1FBRWYsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDYkEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7WUFDRCxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ2pCQSxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEMsU0FBUyxHQUFHLFlBQVksS0FBSyxTQUFTLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQzs7WUFFbEUsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksS0FBSyxFQUFFO29CQUNQLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO2dCQUNELE1BQU07YUFDVDtTQUNKOztRQUVELE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDaEY7O0lBRUQsT0FBTyxNQUFNLENBQUM7OztBQ3BDSCxTQUFTLGVBQWUsQ0FBQyxLQUFLLEVBQUU7SUFDM0MsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxVQUFVLENBQUM7OztBQ0h2QyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBVSxFQUFFLEtBQWEsRUFBRTttQ0FBckIsR0FBRyxDQUFDLENBQU87aUNBQUEsR0FBRyxLQUFLOztJQUN6REQsSUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDN0NDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQzs7SUFFcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1hELElBQU0sU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUM7S0FDNUQ7O0lBRUQsT0FBTyxNQUFNLENBQUM7OztBQ1RsQkEsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDOztBQUV6QixBQUFlLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDNUNDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNuQkEsSUFBSSxRQUFRLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQzs7SUFFOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUV2RyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztJQUU1RixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQzs7O0FDSjdERCxJQUFNLHdCQUF3QixHQUFHLENBQUMsQ0FBQztBQUNuQ0EsSUFBTSx3QkFBd0IsR0FBRyxDQUFDLENBQUM7O0FBRW5DQSxJQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQzs7QUFFaEMsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFO0lBQzlCLElBQU0scUJBQXFCO0lBQUUsSUFBQSxxQkFBcUI7SUFBRSxJQUFBLEtBQUssaUJBQXJEO0lBQ0pBLElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQ0MsSUFBSSxpQkFBaUIsQ0FBQztJQUN0QixJQUFJLFVBQVUsRUFBRTtRQUNaLGlCQUFpQixHQUFHLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqRTs7SUFFRCxJQUFJLHFCQUFxQixLQUFLLFNBQVMsRUFBRTtRQUNyQyxxQkFBcUIsR0FBRyxVQUFVLEdBQUcsaUJBQWlCLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0tBQ3BGOztJQUVELElBQUkscUJBQXFCLEtBQUssU0FBUyxFQUFFO1FBQ3JDLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtZQUNuQixxQkFBcUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDckYsTUFBTSxJQUFJLFVBQVUsRUFBRTtZQUNuQixxQkFBcUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDcEcsTUFBTTtZQUNILHFCQUFxQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUNyRjtLQUNKOztJQUVELE9BQU87UUFDSCxxQkFBcUIsRUFBRSxxQkFBcUI7UUFDNUMscUJBQXFCLEVBQUUscUJBQXFCO0tBQy9DLENBQUM7Q0FDTDs7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtJQUMxQ0EsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25CLEtBQUtBLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzVEQSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUU3QixJQUFJLEVBQUUsS0FBSyxrQkFBa0IsRUFBRTtZQUMzQixNQUFNLElBQUksS0FBSyxDQUFDO1NBQ25CLE1BQU0sSUFBSSxFQUFFLEtBQUssb0JBQW9CLElBQUksRUFBRSxLQUFLLG1CQUFtQixFQUFFO1lBQ2xFLE1BQU0sSUFBSSxNQUFNLENBQUM7U0FDcEIsTUFBTTtZQUNILE1BQU0sSUFBSSxFQUFFLENBQUM7U0FDaEI7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQUVELFNBQVMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUN0Q0QsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDM0NDLElBQUksT0FBTyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDNUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQSxHQUFFLEdBQUcsa0JBQWtCLENBQUcsQ0FBQyxDQUFDO0tBQzdFOztJQUVELE9BQU8sT0FBTyxDQUFDO0NBQ2xCOzs7QUFHRCxBQUFlLFNBQVMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDaEVELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3JDLElBQVEsS0FBSyxpQkFBUDtJQUNOQSxJQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7OztJQUcxQyxJQUFJLEtBQUssS0FBSyxVQUFVLEVBQUU7UUFDdEJDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsS0FBSyxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0ksT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEQ7O0lBRURBLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUNuQkEsSUFBSSxNQUFNLENBQUM7O0lBRVgsSUFBSSxVQUFVLEVBQUU7UUFDWixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QixNQUFNLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hEOztJQUVELElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtRQUNuQixLQUFLLElBQUksR0FBRyxDQUFDO1FBQ2IsTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7S0FDaEM7O0lBRUQsT0FBc0QsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQXpFLElBQUEscUJBQXFCO0lBQUUsSUFBQSxxQkFBcUIsNkJBQTlDOztJQUVOLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLENBQUM7O0lBRTVDRCxJQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUUzQkEsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFFakNDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QkEsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQzs7O0lBRy9HLElBQUksUUFBUSxFQUFFO1FBQ1YsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEM7O0lBRUQsSUFBSSxPQUFPLENBQUMsb0JBQW9CLEVBQUU7UUFDOUIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDeEQ7O0lBRURBLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEtBQUssS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQzs7SUFFdkgsSUFBSSxRQUFRLEVBQUU7UUFDVixjQUFjLElBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7S0FDaEQ7O0lBRURBLElBQUksT0FBTyxDQUFDOztJQUVaLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxlQUFlLEtBQUssTUFBTSxFQUFFO1FBQ2xELE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDL0MsTUFBTTtRQUNIRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RTs7SUFFRCxJQUFJLE9BQU8sS0FBSyxrQkFBa0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM3QyxPQUFPLGNBQWMsQ0FBQztLQUN6Qjs7SUFFREEsSUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7O0lBRTdELE9BQU8sTUFBTSxDQUFDOzs7QUNoSWxCQSxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7O0FBRTdCQSxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEJBLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQzs7QUFFakJBLElBQU0sYUFBYSxHQUFHLHNDQUFzQyxDQUFDO0FBQzdEQSxJQUFNLG1CQUFtQixHQUFHLDBCQUEwQixDQUFDO0FBQ3ZEQSxJQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQztBQUNsQ0EsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDOztBQUUxQixTQUFTLGlCQUFpQixDQUFDLGFBQWEsRUFBRTtJQUN0Q0MsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3BGRCxJQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3QyxhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsS0FBSyxFQUFFO1lBQ2pFQSxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkRBLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFFekQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFdkIsT0FBTyxXQUFXLENBQUM7U0FDdEIsQ0FBQyxDQUFDO0tBQ047Q0FDSjs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDeENDLElBQUksU0FBUyxDQUFDOztJQUVkLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtRQUNoQixTQUFTLEdBQUcsbUJBQW1CLENBQUM7S0FDbkMsTUFBTTtRQUNILFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFBLFlBQVcsR0FBRyxRQUFRLGdCQUFhLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNyRTs7SUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUM3RTs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxhQUFhLEVBQUU7SUFDaEMsSUFBTSxNQUFNO0lBQUUsSUFBQSxNQUFNLHdCQUFoQjtJQUNKQSxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUV6QyxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNyQkQsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDMURBLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQzVEQSxJQUFNLE9BQU8sR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0JBLElBQU0sUUFBUSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQ0MsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFFNUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkQsTUFBTTtZQUNILFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7O1FBRTdDQSxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hDQSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFFdkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN2QixhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlGLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCLE1BQU0sSUFBSSxPQUFPLElBQUksU0FBUyxHQUFHLFVBQVUsRUFBRTtZQUMxQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ3pCLE1BQU0sSUFBSSxVQUFVLEdBQUcsU0FBUyxFQUFFO1lBQy9CLElBQUksUUFBUSxJQUFJLFNBQVMsR0FBRyxVQUFVLEVBQUU7Z0JBQ3BDLFNBQVMsR0FBRyxVQUFVLENBQUM7YUFDMUIsTUFBTSxJQUFJLE9BQU8sSUFBSSxTQUFTLEdBQUcsU0FBUyxFQUFFO2dCQUN6QyxTQUFTLEdBQUcsU0FBUyxDQUFDO2FBQ3pCOztZQUVELGFBQWEsR0FBRyxPQUFPLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUMzQzs7UUFFRCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNoQixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNsQyxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDcEIsTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNyRDtTQUNKO0tBQ0osTUFBTTtRQUNILE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUI7O0lBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzlDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ2xDOztJQUVELGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzlCLGFBQWEsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0NBQzdDOztBQUVELFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0lBQzlCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3RFOztBQUVELFNBQVMsc0JBQXNCLENBQUMsYUFBYSxFQUFFO0lBQzNDLElBQU0sTUFBTTtJQUFFLElBQUEsTUFBTSx3QkFBaEI7SUFDSixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0QyxJQUFJLGFBQWEsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3JDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsYUFBYSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztLQUMxQyxNQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQkQsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sR0FBRyxVQUFVLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksVUFBVSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzVDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1NBQ3ZDO0tBQ0osTUFBTTtRQUNILE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEI7O0lBRUQsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDakM7O0FBRUQsU0FBUyxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRTtJQUMxQ0EsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7O0lBR3BDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQzVDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3hELGFBQWEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO0tBQy9COztJQUVELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQzdDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQy9CLGFBQWEsQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckQ7Q0FDSjs7QUFFRCxTQUFTLGVBQWUsQ0FBQyxhQUFhLEVBQUU7SUFDcEMsYUFBYSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RSxJQUFJLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFDeEIsYUFBYSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0U7Q0FDSjs7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQzdDQyxJQUFJLEtBQUssQ0FBQztJQUNWLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNoQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0tBQ2xCLE1BQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLEtBQUssR0FBRyxNQUFNLENBQUM7S0FDbEIsTUFBTTtRQUNILEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDdkU7SUFDRCxPQUFPLEtBQUssQ0FBQztDQUNoQjs7QUFFRCxTQUFTLHFCQUFxQixDQUFDLGFBQWEsRUFBRTtJQUMxQ0QsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNwQ0MsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2Q0EsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFFckNBLElBQUksS0FBSyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBRTFELFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUVyQ0EsSUFBSSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztJQUVsRCxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ3pCLEdBQUcsR0FBRyxLQUFLLENBQUM7S0FDZjs7SUFFRCxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM1QixhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN4QixhQUFhLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztDQUMzQzs7QUFFRCxTQUFTLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQ2hEQSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDcEIsSUFBSSxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUU7UUFDekMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLEtBQUtBLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNEQSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxvQkFBb0IsSUFBSSxFQUFFLEtBQUssbUJBQW1CLENBQUMsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ3ZGO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUFFRCxTQUFTLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFO0lBQ3ZDQSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDcEIsSUFBSSxRQUFRLEVBQUU7UUFDVkQsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMvQixLQUFLQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQUVELFNBQVMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRTtJQUM5QyxJQUFRLEtBQUs7SUFBRSxJQUFBLEdBQUc7SUFBRSxJQUFBLFFBQVE7SUFBRSxJQUFBLE1BQU07SUFBRSxJQUFBLFlBQVk7SUFBRSxJQUFBLGFBQWE7SUFBRSxJQUFBLGlCQUFpQjtJQUFFLElBQUEsUUFBUSwwQkFBeEY7SUFDTkEsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNsQ0QsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3Q0EsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QkEsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCQSxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO0lBQ25DQSxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3JDQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7O0lBRXhCLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFcEMsSUFBSSxRQUFRLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUNoQyxNQUFNLElBQUksR0FBRyxDQUFDO0tBQ2pCOztJQUVELEtBQUtBLElBQUksR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3ZDQSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUU1QixJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNyQixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxFQUFFOztnQkFFM0IsTUFBTSxJQUFJLE9BQU8sQ0FBQztnQkFDbEIsTUFBTTthQUNUO1NBQ0osTUFBTTtZQUNILElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQyxJQUFJLGFBQWEsR0FBRyxHQUFHLEVBQUU7Z0JBQzdDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDdkI7O1lBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxhQUFhLElBQUksWUFBWSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEUsTUFBTSxJQUFJLE9BQU8sQ0FBQztnQkFDbEIsR0FBRyxHQUFHLFlBQVksQ0FBQzthQUN0Qjs7WUFFRCxJQUFJLFlBQVksS0FBSyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO2dCQUN2RSxHQUFHLElBQUksR0FBRyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQzlCLFNBQVM7YUFDWjtTQUNKOztRQUVELElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtZQUNiLE1BQU0sSUFBSSxFQUFFLENBQUM7WUFDYixXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQ3BCLE1BQU0sSUFBSSxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxXQUFXLENBQUM7U0FDekI7S0FDSjs7SUFFRCxJQUFJLFFBQVEsRUFBRTtRQUNWLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssR0FBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3ZKOztJQUVELElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtRQUNkLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2Qzs7SUFFRCxPQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUU7SUFDNUNBLElBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDbEMsSUFBSSxhQUFhLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRixNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDNUQ7O0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsQUFBZSxTQUFTLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQzdERCxJQUFNLGFBQWEsR0FBRztRQUNsQixRQUFRLEVBQUUsTUFBTSxHQUFHLENBQUM7UUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3hCLE1BQU0sRUFBRSxNQUFNO0tBQ2pCLENBQUM7O0lBRUYsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBRXRDLElBQUksYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUN4QixPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7S0FDakM7O0lBRUQsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakMsZUFBZSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNCLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDOztJQUVyQyxPQUFPLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7O0FDL1JsREEsSUFBTSxvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQzs7QUFFbkQsU0FBUyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7SUFDbkNBLElBQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUU3RCxJQUFJLGtCQUFrQixFQUFFO1FBQ3BCQSxJQUFNLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxPQUFPO1NBQ2pCLENBQUM7O1FBRUZDLElBQUksS0FBSyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUVoRCxJQUFJLEtBQUssS0FBSyxHQUFHLEVBQUU7WUFDZixPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUM1QixNQUFNLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztTQUM5QixNQUFNLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUMzQixNQUFNLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztTQUM5Qjs7UUFFRCxJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZHOztRQUVELE9BQU8sT0FBTyxDQUFDO0tBQ2xCO0NBQ0o7O0FBRUQsQUFBZSxTQUFTLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDMUNBLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsT0FBTyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNDLE1BQU07UUFDSCxPQUFPLEdBQUcsTUFBTSxDQUFDO0tBQ3BCOztJQUVELE9BQU8sT0FBTyxDQUFDOzs7QUNuQ0osU0FBUyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQTJCLEVBQUUsTUFBdUIsRUFBRTttQ0FBaEQsR0FBRyxrQkFBa0IsQ0FBUTttQ0FBQSxHQUFHLGNBQWM7O0lBQzdGLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1FBQ3pDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCOztJQUVELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7O0lBRURELElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQ0EsSUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUV0Q0MsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLE9BQU8sRUFBRTtRQUNURCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztRQUN2QyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEcsTUFBTTtRQUNILE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3JEOztJQUVELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQzNCYyxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDcEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7OztBQ0tyQ0EsSUFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUM7QUFDMUNBLElBQU0sc0JBQXNCLEdBQUcsU0FBUyxDQUFDOztBQUV6QyxTQUFTLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDNUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNyQkEsSUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hFLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRTtLQUNKO0NBQ0o7O0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUM5Q0EsSUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1Q0MsSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoREEsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25CQSxJQUFJLFFBQVEsQ0FBQzs7SUFFYkQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDOztJQUV0RSxJQUFJLFFBQVEsRUFBRTtRQUNWQSxJQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlELElBQUksUUFBUSxFQUFFO1lBQ1YsS0FBS0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUM1Q0EsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzFCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDeEMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDbEIsTUFBTTtpQkFDVDthQUNKO1NBQ0o7O1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDWkQsSUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDNUUsb0JBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUVuRSxJQUFJLFdBQVcsRUFBRTtnQkFDYixRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNLEdBQUcsV0FBVyxDQUFDO2FBQ3hCOztTQUVKO0tBQ0o7O0lBRUQsT0FBTztRQUNILE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztDQUNMOztBQUVELEFBQWUsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQXVCLEVBQUUsTUFBVyxFQUFFO21DQUFoQyxHQUFHLGNBQWMsQ0FBUTttQ0FBQSxHQUFHLEVBQUU7O0lBQzNFLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLElBQUksQ0FBQztLQUNmOztJQUVELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCOztJQUVEQSxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaENBLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOztJQUVyQ0MsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCQSxJQUFJLFNBQVMsQ0FBQzs7SUFFZCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDN0IsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0tBQ3hDOztJQUVERCxJQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUM7S0FDZjs7SUFFREMsSUFBSSxVQUFVLEdBQUcsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsT0FBdUQsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUFqRixJQUFBLGdCQUFnQjtJQUFVLElBQUEsU0FBUyxjQUEvQzs7SUFFTixNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ25CLFVBQVUsR0FBRyxnQkFBZ0IsS0FBSyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDOztJQUU1RSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3RFLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEQsU0FBUyxHQUFHLElBQUksQ0FBQztLQUNwQjs7SUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1dBQzVCLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUM7V0FDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztXQUNyRSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFdkMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFFNUIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ2pCLE1BQU0sSUFBSSxVQUFVLEVBQUU7UUFDbkIsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ2hCOztJQUVELElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRTtRQUNyQixNQUFNLElBQUksR0FBRyxDQUFDO0tBQ2pCOztJQUVELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQy9HREQsSUFBTU0sY0FBWSxHQUFHLFdBQVcsQ0FBQzs7QUFFakMsQUFBZSxTQUFTLFlBQVksQ0FBQyxNQUFNLEVBQUU7SUFDekNOLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQzs7SUFFekIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDTSxjQUFZLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO1FBQy9DTixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFFOUMsT0FBTyxLQUFLLENBQUM7S0FDaEIsQ0FBQyxDQUFDOzs7QUNMUEEsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBQzVCQSxJQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztBQUM1QkEsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDdkNBLElBQU0sdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkNBLElBQU0sd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcENBLElBQU0sd0JBQXdCLEdBQUcsQ0FBQyxDQUFDO0FBQ25DQSxJQUFNLHVCQUF1QixHQUFHLENBQUMsQ0FBQzs7QUFFbENBLElBQU0sU0FBUyxHQUFHLEVBQUM7U0FDZixDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUEsQ0FBRztTQUFDLENBQ3ZDLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUEsQ0FBRztTQUN4QyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUEsQ0FBRztTQUN2QyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUEsQ0FDeEMsQ0FBQzs7QUFFRkEsSUFBTSxtQkFBbUIsR0FBRztJQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNWLFNBQVMsRUFBRSxDQUFDO0lBQ1osS0FBSyxFQUFFLENBQUM7SUFDUixJQUFJLEVBQUUsQ0FBQztJQUNQLE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQzs7QUFFRkEsSUFBTSxxQkFBcUIsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFaEQsU0FBUyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0IsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Q0FDckM7O0FBRURBLElBQU0sZ0JBQWdCLEdBQUcsRUFBRTtJQUN2QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSxHQUFHO0NBQ2pCLEVBQUU7SUFDQyxHQUFHLEVBQUUsTUFBTTtJQUNYLFNBQVMsRUFBRSxHQUFHO0NBQ2pCLEVBQUU7SUFDQyxHQUFHLEVBQUUsT0FBTztJQUNaLFNBQVMsRUFBRSxHQUFHO0NBQ2pCLEVBQUU7SUFDQyxHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSxHQUFHO0NBQ2pCLEVBQUU7SUFDQyxHQUFHLEVBQUUsU0FBUztJQUNkLFNBQVMsRUFBRSxHQUFHO0NBQ2pCLEVBQUU7SUFDQyxHQUFHLEVBQUUsTUFBTTtJQUNYLFlBQVksRUFBRSxnQkFBZ0I7Q0FDakMsRUFBRTtJQUNDLEdBQUcsRUFBRSxRQUFRO0lBQ2IsU0FBUyxFQUFFLEdBQUc7Q0FDakIsRUFBRTtJQUNDLEdBQUcsRUFBRSxRQUFRO0lBQ2IsU0FBUyxFQUFFLEdBQUc7Q0FDakIsRUFBRTtJQUNDLEdBQUcsRUFBRSxjQUFjO0lBQ25CLFNBQVMsRUFBRSxHQUFHO0NBQ2pCLEVBQUUsQ0FBQzs7QUFFSkEsSUFBTSxzQkFBc0IsR0FBRztJQUMzQixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztDQUNULENBQUM7O0FBRUZBLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQkEsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUUzQixTQUFTLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtJQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzdCLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDNUQ7SUFDRCxPQUFPLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUNyQzs7QUFFRCxTQUFTLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtJQUNsQ0EsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFDeEIsS0FBS0EsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzVDQSxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN6QixPQUFPLElBQUksU0FBUyxDQUFDO1NBQ3hCLE1BQU07WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ25DO0tBQ0o7O0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7SUFFckIsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsU0FBUyxhQUFhLENBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFO0lBQ2pERCxJQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDM0NDLElBQUksUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNqQ0EsSUFBSSxXQUFXLEVBQUUsTUFBTSxDQUFDO0lBQ3hCLEtBQUtBLElBQUksTUFBTSxJQUFJLGdCQUFnQixFQUFFO1FBQ2pDRCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkJDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDQSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFLQSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzdDRCxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbENDLElBQUksY0FBYyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JEQSxJQUFJLEtBQUssR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTFELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsS0FBSyxJQUFJLGVBQWUsQ0FBQzthQUM1QixNQUFNO2dCQUNILGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ25DQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25HLEtBQUssSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7O1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFFcEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxFQUFFO2dCQUNsQixNQUFNO2FBQ1Q7U0FDSjs7UUFFRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsS0FBSyxJQUFJLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztTQUN4RTs7UUFFRCxJQUFJLEtBQUssR0FBRyxRQUFRLEVBQUU7WUFDbEIsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNqQixXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztLQUNKOztJQUVELE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFFbEMsS0FBS0EsSUFBSU0sS0FBRyxHQUFHLENBQUMsRUFBRUEsS0FBRyxHQUFHLGdCQUFnQixFQUFFQSxLQUFHLEVBQUUsRUFBRTtRQUM3Q1AsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDTyxLQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLFNBQVMsSUFBSSxTQUFTLEtBQUssVUFBVSxDQUFDQSxLQUFHLENBQUMsRUFBRTtZQUM1Q1AsSUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDTyxLQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxVQUFVLENBQUNBLEtBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDeEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUNBLEtBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkc7U0FDSjtLQUNKOztJQUVELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDMUIsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNoQztJQUNELGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7Q0FDOUM7OztBQUdELFNBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDcENQLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDeEUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM1QixPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEUsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQy9DO0lBQ0RBLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUM5REMsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUU7UUFDcEJELElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3hEQSxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztRQUVyRCxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUs7WUFDckQsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksYUFBYSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFLGdCQUFnQixDQUFDO1lBQ25HLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7S0FDNUcsTUFBTTtRQUNILE1BQU0sR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztLQUMxRTs7SUFFRCxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7SUFDbENDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixLQUFLQSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNwREEsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkNBLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdkJBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLEtBQUssRUFBRTtZQUNQQSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RDtLQUNKOztJQUVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUM3Qjs7QUFFRCxBQUFlLFNBQVMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDOUNELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDL0JDLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDLE1BQU07WUFDSCxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ25CO0tBQ0osTUFBTSxJQUFJLE1BQU0sRUFBRTtRQUNmLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDekI7O1FBRURBLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsTUFBTSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2xKLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNwQixNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QyxNQUFNO2dCQUNILFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMxQztTQUNKOztRQUVELElBQUksUUFBUSxFQUFFO1lBQ1YsTUFBTSxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDM0M7S0FDSjs7SUFFRCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1QsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ2hDOztJQUVELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQ2hQYyxTQUFTLFlBQVksQ0FBQyxZQUFZLEVBQUU7SUFDL0NBLElBQUksUUFBUSxDQUFDO0lBQ2IsSUFBSSxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQ25CLFFBQVEsR0FBRyxhQUFhLENBQUM7S0FDNUIsTUFBTSxJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDM0IsUUFBUSxHQUFHLE1BQU0sQ0FBQztLQUNyQixNQUFNLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtRQUMzQixRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQ3ZCLE1BQU0sSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1FBQzNCLFFBQVEsR0FBRyxPQUFPLENBQUM7S0FDdEI7O0lBRUQsT0FBTyxRQUFRLENBQUM7OztBQ1RMLFNBQVMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7SUFDL0UsT0FBTyxlQUFlLENBQUMsTUFBTSxFQUFFO1FBQzNCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDcEMsVUFBVSxFQUFFLFVBQVU7UUFDdEIsS0FBSyxFQUFFLEtBQUs7S0FDZixDQUFDLENBQUM7OztBQ1RQLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNyQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxVQUFVLENBQUM7Q0FDckM7O0FBRUQsQUFBZSxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ3BGOztBQ05ERCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEJBLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNwQkEsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ3BCQSxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7QUFDMUJBLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQzs7QUFFMUJBLElBQU0sY0FBYyxHQUFHO0lBQ25CLEdBQUcsRUFBRSxLQUFLO0lBQ1YsR0FBRyxFQUFFLE1BQU07SUFDWCxHQUFHLEVBQUUsT0FBTztJQUNaLEdBQUcsRUFBRSxPQUFPO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixHQUFHLEVBQUUsS0FBSztJQUNWLEdBQUcsRUFBRSxLQUFLO0lBQ1YsR0FBRyxFQUFFLE9BQU87SUFDWixHQUFHLEVBQUUsT0FBTztJQUNaLEdBQUcsRUFBRSxPQUFPO0lBQ1osR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFdBQVc7SUFDaEIsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7Q0FDWixDQUFDOztBQUVGQSxJQUFNLGdCQUFnQixHQUFHLGlMQUFpTCxDQUFDLEFBRTNNOztBQ3ZCQSxTQUFTLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUVFLGFBQVUsRUFBRTtJQUN6REYsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDRSxhQUFVLENBQUMsQ0FBQztJQUMzQ0QsSUFBSSxRQUFRLENBQUM7SUFDYixJQUFJLEdBQUcsR0FBRyxhQUFhLEVBQUU7UUFDckIsUUFBUSxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsR0FBRyxDQUFDO0tBQ3RDLE1BQU07UUFDSCxRQUFRLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQztLQUNsQzs7SUFFRCxPQUFPLFFBQVEsR0FBRyxDQUFDLENBQUM7Q0FDdkI7O0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3hELElBQUksWUFBWSxJQUFJLENBQUMsRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDdkU7O0FBRUQsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3pERCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUU7UUFDbEIsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCOztJQUVELE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzNFOzs7QUFHRCxTQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUN6QyxJQUFRLFVBQVU7SUFBRSxJQUFBLGVBQWU7SUFBRSxJQUFBLFNBQVM7SUFBRSxJQUFBLGFBQWE7SUFBRSxJQUFBLFdBQVcsdUJBQXBFO0lBQ05BLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUM3QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1FBQzdCLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7SUFDREEsSUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3JDQSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1REEsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQ0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsSUFBSSxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDN0IsTUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOztJQUVELElBQUksYUFBYSxFQUFFO1FBQ2ZELElBQU0sZUFBZSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDN0YsTUFBTSxHQUFHLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDbEQ7O0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsU0FBUyxlQUFlLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQzNEQyxJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtRQUNsQixNQUFNLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNwRSxNQUFNO1FBQ0gsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUMvRTtJQUNELE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQUVERCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXRCLFVBQVUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3hDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztDQUM1QyxDQUFDOztBQUVGLFVBQVUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTtJQUM5QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0NBQ2pFLENBQUM7O0FBRUYsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO0lBQzlDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2xFLENBQUM7O0FBRUYsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO0lBQzlDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ2pFLENBQUM7O0FBRUYsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDeENDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDcEIsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7S0FDckI7SUFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7Q0FDbEMsQ0FBQzs7QUFFRixVQUFVLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN4Q0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDekMsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0NBQ25DLENBQUM7O0FBRUYsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDeEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0NBQzdDLENBQUM7O0FBRUYsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDeEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztDQUNuRCxDQUFDOztBQUVGLFVBQVUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ3hDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7Q0FDbEQsQ0FBQzs7QUFFRixVQUFVLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN4QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7Q0FDL0MsQ0FBQzs7QUFFRixVQUFVLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN4QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7Q0FDL0MsQ0FBQzs7QUFFRixVQUFVLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUN4Q0EsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVDQyxJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtRQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUN4RixNQUFNO1FBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDckM7SUFDRCxPQUFPLE1BQU0sQ0FBQztDQUNqQixDQUFDOztBQUVGLFVBQVUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTtJQUM5QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQzVGLENBQUM7O0FBRUYsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO0lBQzlDLE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7UUFDOUIsVUFBVSxFQUFFLFlBQVksR0FBRyxDQUFDO1FBQzVCLGVBQWUsRUFBRSxZQUFZLEdBQUcsQ0FBQztRQUNqQyxTQUFTLEVBQUUsSUFBSTtRQUNmLGFBQWEsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQztDQUNOLENBQUM7O0FBRUYsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO0lBQzlDLE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7UUFDOUIsU0FBUyxFQUFFLFlBQVksR0FBRyxDQUFDO1FBQzNCLGFBQWEsRUFBRSxZQUFZLEtBQUssQ0FBQztRQUNqQyxXQUFXLEVBQUUsWUFBWSxLQUFLLENBQUM7S0FDbEMsQ0FBQyxDQUFDO0NBQ04sQ0FBQzs7QUFFRixVQUFVLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7SUFDOUMsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtRQUM5QixlQUFlLEVBQUUsWUFBWSxLQUFLLENBQUM7UUFDbkMsU0FBUyxFQUFFLFlBQVksS0FBSyxDQUFDLElBQUksWUFBWSxLQUFLLENBQUM7S0FDdEQsQ0FBQyxDQUFDO0NBQ04sQ0FBQzs7QUFFRixVQUFVLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7SUFDOUMsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtRQUM5QixlQUFlLEVBQUUsWUFBWSxLQUFLLENBQUM7UUFDbkMsU0FBUyxFQUFFLFlBQVksS0FBSyxDQUFDLElBQUksWUFBWSxLQUFLLENBQUM7UUFDbkQsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQyxDQUFDO0NBQ04sQ0FBQzs7QUFFRixVQUFVLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7SUFDOUNBLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3ZELENBQUM7O0FBRUYsVUFBVSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUM7O0FBRS9CLFVBQVUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTtJQUM5QyxPQUFPLGVBQWUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztDQUMxRCxDQUFDOztBQUVGLFVBQVUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTtJQUM5QyxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztDQUN4RCxDQUFDOztBQUVGLFVBQVUsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDOztBQUU3QixBQUFlLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBdUIsRUFBRTttQ0FBbkIsR0FBRyxjQUFjOztJQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2YsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOztJQUVERCxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaENBLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBRTFDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEtBQUssRUFBRTtRQUNyREMsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNoQ0EsSUFBSSxNQUFNLENBQUM7O1FBRVgsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QyxNQUFNO1lBQ0gsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNEOztRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2pCLENBQUMsQ0FBQztDQUNOOztBQ2hOTSxTQUFTLGVBQWUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtJQUN4REQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7O0lBRWpEQSxJQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7O0lBRTlFQSxJQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7SUFFckQsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Q0FDckY7O0FBRUQsQUFBTyxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ25DLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN0Qzs7O0FDSkxBLElBQU0sb0JBQW9CLEdBQUcsNkJBQTZCLENBQUM7QUFDM0RBLElBQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFDO0FBQ3pDQSxJQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDL0JBLElBQU0sWUFBWSxHQUFHO0lBQ2pCLENBQUMsRUFBRSxVQUFVO0lBQ2IsQ0FBQyxFQUFFLFVBQVU7SUFDYixDQUFDLEVBQUUsUUFBUTtDQUNkLENBQUM7QUFDRkEsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQzFCQSxJQUFNUSxhQUFXLEdBQUcsS0FBSyxDQUFDOztBQUUxQlIsSUFBTSxtQkFBbUIsR0FBRztJQUN4QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixPQUFPO0NBQ1YsQ0FBQztBQUNGQSxJQUFNLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUN4RkEsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUM7O0FBRWhDLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ25DLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0NBQzVDOztBQUVELFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDN0IsSUFBTSxNQUFNO0lBQUUsSUFBQSxHQUFHLGFBQWI7SUFDSkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFO1FBQzFCLENBQUMsRUFBRSxDQUFDO1FBQ0osR0FBRyxFQUFFLENBQUM7S0FDVDtJQUNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNQLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDWjtJQUNELEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLE9BQU8sQ0FBQyxDQUFDO0NBQ1o7O0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QkEsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXO1FBQ3ZGLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFFbEUsSUFBSSxLQUFLLEVBQUU7UUFDUCxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMvQixPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDOUI7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNmOztBQUVELFNBQVMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQ3pDQSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ0wsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBQ3JCLElBQUksRUFBRSxVQUFVO1FBQ2hCLFdBQVcsR0FBRyxDQUFDO1FBQ2YsUUFBUSxHQUFHLENBQUM7UUFDWixRQUFRLENBQUM7O0lBRWIsT0FBTyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BCLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7O1FBRTFELElBQUksS0FBSyxFQUFFO1lBQ1AsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyQzs7UUFFRCxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksVUFBVSxHQUFHLFdBQVcsRUFBRTtZQUMvQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDaEI7S0FDSjs7SUFFRCxJQUFJLFdBQVcsRUFBRTtRQUNiLEtBQUssQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDO1FBQzlCLE9BQU8sUUFBUSxHQUFHLENBQUMsQ0FBQztLQUN2Qjs7SUFFRCxPQUFPLElBQUksQ0FBQztDQUNmOztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRTtJQUN6QkEsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25CLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2hFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ2pCO0lBQ0QsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7SUFDbEMsSUFBUSxTQUFTO0lBQUUsSUFBQSxhQUFhLDBCQUExQjtJQUNOLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDWixNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDbEM7O0lBRUQsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUNPLGFBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDQSxhQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztDQUMzSDs7QUFFRCxTQUFTLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQy9DLElBQVEsVUFBVTtJQUFFLElBQUEsV0FBVztJQUFFLElBQUEsZUFBZTtJQUFFLElBQUEsYUFBYTtJQUFFLElBQUEsUUFBUSxvQkFBbkU7SUFDTixLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzs7SUFFakIsSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUN4RCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDaEI7O0lBRUQsSUFBSSxhQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNsRixPQUFPLElBQUksQ0FBQztLQUNmOztJQUVEUixJQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDVixPQUFPLENBQUMsYUFBYSxDQUFDO0tBQ3pCOztJQUVEQSxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUJBLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQ0EsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3Q0EsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCQyxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUUvQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUMsRUFBRTtRQUM1SSxPQUFPLElBQUksQ0FBQztLQUNmOztJQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ3RCLGFBQWEsR0FBRyxJQUFJLENBQUM7S0FDeEI7O0lBRUQsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDekYsT0FBTyxJQUFJLENBQUM7S0FDZjs7SUFFRCxLQUFLLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEMsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsS0FBSyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Q0FDdkM7O0FBRUQsU0FBUyxVQUFVLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDakNELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkNBLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUVuRUEsSUFBTSxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUVuRixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztDQUMzQjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtJQUNyQ0EsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQ0EsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakVDLElBQUksU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRixJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ2hFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Q0FDSjs7QUFFREQsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDOztBQUVuQixPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxFQUFFO0lBQ3hCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEJBLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBRWhDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUN4QyxPQUFPLElBQUksQ0FBQztLQUNmOztJQUVELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDbkI7Q0FDSixDQUFDOztBQUVGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQzlCQSxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUVwQ0MsSUFBSSxTQUFTLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNGLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQztLQUNmO0NBQ0osQ0FBQzs7QUFFRixPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxFQUFFLElBQUksRUFBRTtJQUM5QixPQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ3ZDLENBQUM7O0FBRUYsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDOUIsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztDQUN2QyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUU7SUFDeEJELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcENDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBRTdELElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtRQUNmLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7O0lBRUQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ2JELElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDaEQsSUFBSSxJQUFJLEdBQUcsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxJQUFJLEdBQUcsQ0FBQztTQUNmO0tBQ0o7O0lBRUQsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDckIsQ0FBQzs7QUFFRixPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxFQUFFO0lBQ3hCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBRXRCQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtRQUNkLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDYjs7SUFFRCxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM7S0FDZjs7SUFFRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUN2QixDQUFDOztBQUVGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUU7SUFDeEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFdEJBLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBRWhDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUM1QyxPQUFPLElBQUksQ0FBQztLQUNmOztJQUVELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0NBQ3ZCLENBQUM7O0FBRUYsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDOUJELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcENDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBRXhFRCxJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsRUFBRSxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQy9ELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7O0lBRUQsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDekIsQ0FBQzs7QUFFRixPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxFQUFFO0lBQ3hCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEJBLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUN2QixDQUFDOztBQUVGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUU7SUFDeEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFdEJDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBRWhDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUM1QyxPQUFPLElBQUksQ0FBQztLQUNmOztJQUVELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQzFDLENBQUM7O0FBRUYsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssRUFBRTtJQUN4QixTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RCRCxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUVwQyxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDaEQsT0FBTyxJQUFJLENBQUM7S0FDZjs7SUFFRCxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUMzQixDQUFDOztBQUVGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUU7SUFDeEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QkEsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDaEQsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQzNCLENBQUM7O0FBRUYsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssRUFBRTtJQUN4QkEsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQ0EsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4REMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDOztJQUV4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUM3QixZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsWUFBWSxJQUFJLElBQUksQ0FBQztRQUNyQixLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztLQUMzQjs7SUFFRCxJQUFJLFlBQVksS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDM0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7SUFFRCxLQUFLLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztDQUNyQyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQzlCRCxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUVwQ0EsSUFBTSxXQUFXLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFFOUJBLElBQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDN0MsVUFBVSxFQUFFLFdBQVc7UUFDdkIsZUFBZSxFQUFFLFdBQVc7UUFDNUIsYUFBYSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFDOztJQUVILElBQUksT0FBTyxFQUFFO1FBQ1QsT0FBTyxPQUFPLENBQUM7S0FDbEI7Q0FDSixDQUFDOztBQUVGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQzlCQSxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUVwQ0EsSUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtRQUM3QyxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUM7UUFDdEIsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDO1FBQ3JCLGFBQWEsRUFBRSxLQUFLLEtBQUssQ0FBQztLQUM3QixDQUFDLENBQUM7O0lBRUgsSUFBSSxPQUFPLEVBQUU7UUFDVCxPQUFPLE9BQU8sQ0FBQztLQUNsQjtDQUNKLENBQUM7O0FBRUYsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDOUJBLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBRXBDQSxJQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQzdDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO1FBQ3ZDLGVBQWUsRUFBRSxLQUFLLEtBQUssQ0FBQztLQUMvQixDQUFDLENBQUM7SUFDSCxJQUFJLE9BQU8sRUFBRTtRQUNULE9BQU8sT0FBTyxDQUFDO0tBQ2xCO0NBQ0osQ0FBQzs7QUFFRixPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxFQUFFLElBQUksRUFBRTtJQUM5QkEsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFcENBLElBQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDN0MsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7UUFDdkMsZUFBZSxFQUFFLEtBQUssS0FBSyxDQUFDO1FBQzVCLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztJQUNILElBQUksT0FBTyxFQUFFO1FBQ1QsT0FBTyxPQUFPLENBQUM7S0FDbEI7Q0FDSixDQUFDOztBQUVGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQzlCQSxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDQSxJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNEQSxJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUU5RCxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQztLQUNmO0NBQ0osQ0FBQzs7QUFFRixPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxFQUFFLElBQUksRUFBRTtJQUM5QixPQUFPLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzNDLENBQUM7O0FBRUYsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDOUIsT0FBTyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztDQUMzQyxDQUFDOztBQUVGLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRTtJQUN2QixJQUFNLElBQUk7SUFBRSxJQUFBLEtBQUs7SUFBRSxJQUFBLEdBQUc7SUFBRSxJQUFBLEtBQUs7SUFBRSxJQUFBLE9BQU87SUFBRSxJQUFBLE9BQU87SUFBRSxJQUFBLFlBQVk7SUFBRSxJQUFBLE1BQU07SUFBRSxJQUFBLEdBQUc7SUFBRSxJQUFBLFdBQVc7SUFBRSxJQUFBLGFBQWEsdUJBQWxHO0lBQ0pBLElBQU0sT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3RFQSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3hCQyxJQUFJLE1BQU0sQ0FBQzs7SUFFWCxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLE9BQU8sRUFBRTtRQUM1RCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN4QixNQUFNO1FBQ0gsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3Qjs7UUFFRCxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDZCxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7S0FDSjs7SUFFRCxJQUFJLE1BQU0sSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1FBQ3RCLEtBQUssSUFBSSxFQUFFLENBQUM7S0FDZjs7SUFFRCxJQUFJLEdBQUcsRUFBRTtRQUNMLElBQUksV0FBVyxFQUFFO1lBQ2IsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOztRQUVELElBQUksYUFBYSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxRDs7UUFFRCxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQ3hGLE1BQU07UUFDSCxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDM0UsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM1Qjs7SUFFRCxJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7UUFDWixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVCOztJQUVELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQy9DLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7O0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDckNBLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUVyREQsSUFBTSxLQUFLLEdBQUc7UUFDVixNQUFNLEVBQUUsT0FBTztRQUNmLEdBQUcsRUFBRSxDQUFDO1FBQ04sS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLElBQUk7UUFDWCxHQUFHLEVBQUUsSUFBSTtRQUNULEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLElBQUk7UUFDYixPQUFPLEVBQUUsSUFBSTtRQUNiLFlBQVksRUFBRSxJQUFJO0tBQ3JCLENBQUM7SUFDRkEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUM5QkMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDOztJQUVwQixPQUFPLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNwQ0EsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFFNUIsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNuQjs7WUFFRCxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkIsTUFBTTtZQUNILElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNiQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKLE1BQU0sSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtLQUNKOztJQUVELElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7O0lBRUQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO0NBQ3BDOztBQUVELFNBQVMsd0JBQXdCLENBQUMsTUFBTSxFQUFFO0lBQ3RDRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUVsREMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBRXRGLE9BQU8sSUFBSSxHQUFHLE1BQU0sQ0FBQztDQUN4Qjs7QUFFRCxTQUFTLHdCQUF3QixDQUFDLEtBQUssRUFBRTtJQUNyQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNwQ0EsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZkEsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRXBELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBRXBDLElBQUksUUFBUSxFQUFFO2dCQUNWLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxHQUFHLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELElBQUksR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUNsRDs7WUFFRCxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7Q0FDSjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDOUJELElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNuQkEsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNuQ0EsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOztJQUV2QyxLQUFLQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakQ7O0lBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Q0FDOUM7O0FBRUQsQUFBZSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQXVCLEVBQUU7bUNBQW5CLEdBQUcsY0FBYzs7SUFDckUsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNoQjs7SUFFREEsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDQSxJQUFJLElBQUksR0FBRyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxJQUFJLElBQUksRUFBRTtRQUNOLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7O0lBRURELElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQ0MsSUFBSSxZQUFZLEdBQUcsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsWUFBWSxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUM7O0lBRTdFRCxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOztJQUVuQyxLQUFLQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNuQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7O0lBRUQsT0FBTyxJQUFJLENBQUM7Q0FDZjs7QUMzakJERCxJQUFNLFVBQVUsR0FBRztJQUNmLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsR0FBRztLQUNsQjs7SUFFRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxHQUFHO0tBQ2xCOztJQUVELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFO1lBQ1AsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ1A7UUFDRCxVQUFVLEVBQUUsR0FBRztLQUNsQjs7SUFFRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixTQUFTLEVBQUUsQ0FBQztLQUNmOztJQUVELEdBQUcsRUFBRTtRQUNELElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLENBQUM7S0FDZjtDQUNKLENBQUM7O0FBRUZBLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQzs7QUFFMUIsU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM5QkEsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDdkMsUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7S0FDN0IsTUFBTTtRQUNILEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDUCxJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztLQUNOO0NBQ0o7O0FBRUQsU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFO0lBQ3ZCLE9BQU8sT0FBTyxLQUFLLEdBQUcsSUFBSSxPQUFPLEtBQUssR0FBRyxDQUFDO0NBQzdDOztBQUVELEFBQWUsU0FBUyxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQXVCLEVBQUU7bUNBQW5CLEdBQUcsY0FBYzs7SUFDbkVBLElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQ0EsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQ0EsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCQyxJQUFJLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQy9DQSxJQUFJLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBRTNDLE9BQU8sS0FBSyxFQUFFO1FBQ1ZBLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFckIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUN6QixVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hFOztRQUVELElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hELFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUIsTUFBTTtZQUNIRCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0JBLElBQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2Q0EsSUFBTSxJQUFJLEdBQUc7Z0JBQ1QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7YUFDakIsQ0FBQzs7WUFFRixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDOztZQUVEQSxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRS9CLElBQUksS0FBSyxFQUFFO2dCQUNQQSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0ZBLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7O2dCQUVuQyxJQUFJLGFBQWEsSUFBSSxTQUFTLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUc7d0JBQ1QsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO3dCQUNoQixRQUFRLEVBQUUsWUFBWSxDQUFDLGFBQWEsQ0FBQzt3QkFDckMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUztxQkFDN0MsQ0FBQztpQkFDTDthQUNKOztZQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7O1FBRUQsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUN2QyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDOztJQUVELElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDNUIsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDbkQ7O0lBRUQsT0FBTyxLQUFLLENBQUM7Q0FDaEI7O0FDNUdEQSxJQUFNTSxjQUFZLEdBQUcsc0JBQXNCLENBQUM7O0FBRTVDLEFBQU8sU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDNUMsSUFBSSxNQUFNLEVBQUU7UUFDUixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO0tBQ0o7O0lBRUQsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUNoRTs7QUFFRCxBQUFPLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQzNDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQ0EsY0FBWSxFQUFFLFNBQVMsS0FBSyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRTtRQUMxRUwsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFFeEMsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDOUYsQ0FBQyxDQUFDO0NBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=