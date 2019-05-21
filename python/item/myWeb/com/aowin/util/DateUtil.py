import datetime


def current_time():
    """获取当前时间"""
    return datetime.datetime.now()


def gmt_time():
    """
    获得 Sun, 16 Dec 2018 20:30:00 GMT 格式的gmt时间
    :return:
    """
    format_string = "%a, %d %b %Y %H:%M:%S GMT"
    return datetime.datetime.now().strftime(format_string)


def gmt_time_after(minutes):
    """
    获得 指定分钟之后的时间 Sun, 16 Dec 2018 20:30:00 GMT 格式的gmt时间
    :return:
    """
    format_string = "%a, %d %b %Y %H:%M:%S GMT"
    after = current_time() + datetime.timedelta(minutes=minutes)
    return after.strftime(format_string)


print(gmt_time_after(1))
