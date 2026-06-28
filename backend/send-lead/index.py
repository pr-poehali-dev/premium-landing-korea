import os
import json
import requests

def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта K-Work в Telegram-бот."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    CORS = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    telegram = body.get('telegram', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': CORS,
            'body': json.dumps({'ok': False, 'error': 'name and phone required'}, ensure_ascii=False),
        }

    lines = [
        '🔔 <b>Новая заявка — K-Work</b>',
        '',
        f'👤 <b>Имя:</b> {name}',
        f'📞 <b>Телефон:</b> {phone}',
    ]
    if telegram:
        tg = telegram if telegram.startswith('@') else f'@{telegram}'
        lines.append(f'✈️ <b>Telegram:</b> {tg}')

    text = '\n'.join(lines)

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    url = f'https://api.telegram.org/bot{token}/sendMessage'
    resp = requests.post(url, json={'chat_id': chat_id, 'text': text, 'parse_mode': 'HTML'}, timeout=15)
    result = resp.json()

    if not result.get('ok'):
        return {'statusCode': 500, 'headers': CORS, 'body': json.dumps({'ok': False, 'error': str(result)})}

    return {'statusCode': 200, 'headers': CORS, 'body': json.dumps({'ok': True})}