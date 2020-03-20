import _ from 'lodash'
import datefn from 'date-fns'


/**
 * 10:35
 * 昨天
 * 前天
 * 04-24
 * 2019-04
 */
export function formatDate(date, now) {
    if (_.isNil(date) || _.isEmpty(date)) {
        return ''
    }
    date = new Date(date)
    if (_.isNil(now)) {
        now = new Date()
    }
    if (datefn.isSameDay(now, date)) {
        return datefn.format(date, 'HH:mm')
    } else if (datefn.isSameDay(now, datefn.addDays(date, 1))) {
        return datefn.format(date, '昨天')
    } else if (datefn.isSameDay(now, datefn.addDays(date, 2))) {
        return datefn.format(date, '前天')
    } else if (datefn.isSameYear(now, date)) {
        return datefn.format(date, 'MM-DD')
    } else {
        return datefn.format(date, 'YYYY-MM')
    }
}


export function formatFullDate(date) {
    if (_.isNil(date) || _.isEmpty(date)) {
        return ''
    }
    date = new Date(date)
    let now = new Date()
    let dateStr = datefn.format(date, 'YYYY-MM-DD HH:mm:ss')
    if (datefn.isSameDay(now, date)) {
        dateStr = `${dateStr} 今天`
    } else if (datefn.isSameDay(now, datefn.addDays(date, 1))) {
        dateStr = `${dateStr} 昨天`
    } else {
        let days = datefn.differenceInDays(now, date);
        dateStr = `${dateStr} 约 ${days} 天前`
    }
    return dateStr
}


