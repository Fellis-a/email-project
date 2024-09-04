function myFunction() {
   var recipient = "2012alis@mail.ru";
  var subject = "Пример HTML письма через Google Apps Script";
  
  var htmlBody = `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="format-detection" content="date=no">
    <meta name="format-detection" content="telephone=no">


    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FLOWY</title>
    <style>
        /* Базовые стили для всего письма */
        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            background-color: #f8e8e8;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        img {
            display: block;
            border: 0;
            line-height: 100%;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
            /* Сглаживание изображений в IE */
        }

        .appleLinks a {
            color: inherit;
            text-decoration: none;
        }

        .button {
            background-color: #ffffff;
            border: 1px solid #000;
            color: #000;
            display: inline-block;
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            text-decoration: none;
            width: 150px;
            -webkit-text-size-adjust: none;
            mso-hide: all;
        }

        /* Стили по умолчанию для таблиц */
        .content-table {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }

        .column {
            width: 50%;
            vertical-align: top;
        }

        .footer-table {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f8e8e8;
        }

        .social-icons {
            text-align: center;
        }

        .social-icons a {
            margin: 0 5px;
            display: inline-block;
        }

        /* Медиазапросы для адаптивности */
        @media only screen and (max-width: 600px) {

            .content-table,
            .footer-table {
                width: 100% !important;
            }

            .column {
                width: 100% !important;
                display: block;
                text-align: center;
            }

            .content {
                padding: 10px !important;
            }

            .button {
                width: auto !important;
                padding: 10px 20px !important;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0; background-color: #f8e8e8;">
    <!--[if (gte mso 9)|(IE)]>
    <table width="600" align="center">
        <tr>
            <td>
    <![endif]-->
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="content-table">

        <tr>
            <td align="center" style="padding: 10px 0; background-color: #ffffff;">
                <img src="http://i99393la.beget.tech/flowy.png" alt="logo">
            </td>
        </tr>

        <tr>
            <td align="center"
                style="padding: 20px; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; color: #61459C;">
                Привет от FLOWY!
            </td>
        </tr>

        <tr>
            <td align="center" style="padding: 20px;">
                <img src="http://i99393la.beget.tech/img-1.png" alt="Image 1"
                    style="width: 100%; max-width: 100%; height: 50%;">
                <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 22px; color: #333333;">
                    Благодарим вас за выбор FLOWY! Мы рады приветствовать вас в нашей цветочной семье, где каждый букет
                    создаётся с любовью и заботой.

                    Мы стремимся превратить каждый ваш заказ в уникальный опыт, и вот почему:
                </p>
                <a href="#" class="button" style="padding: 10px 20px; margin-top: 10px;">Перейти</a>
            </td>
        </tr>

        <tr>
            <td align="center" style="padding: 20px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="column" align="center" style="padding: 10px;">
                            <img src="http://i99393la.beget.tech/img-2.png" alt="Image 2"
                                style="width: 100%; height: auto;">
                        </td>
                        <td class="column" align="left" style="padding: 10px;">
                            <h2 style="font-family: Arial, sans-serif; font-size: 18px; color: #333333;">
                                Персонализированные букеты</h2>
                            <p
                                style="font-family: Arial, sans-serif; font-size: 16px; line-height: 22px; color: #333333;">

                                Мы понимаем, как важно передать чувства через цветы. Наши флористы создадут уникальный
                                букет, который будет отражать ваши эмоции и пожелания.
                            </p>
                            <a href="example.com" class="button"
                                style="padding: 10px 20px; margin-top: 10px;">Посмотреть
                                каталог</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td align="center" style="padding: 20px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="column" align="left" style="padding: 10px;">
                            <h2 style="font-family: Arial, sans-serif; font-size: 18px; color: #333333;">Быстрая и
                                надёжная доставка</h2>
                            <p
                                style="font-family: Arial, sans-serif; font-size: 16px; line-height: 22px; color: #333333;">
                                Доставка в любое удобное для вас время и место. Мы гарантируем свежесть и качество наших
                                цветов, независимо от расстояния.
                            </p>
                            <a href="example.com" class="button" style="padding: 10px 20px; margin-top: 10px;">Заказать
                                сейчас</a>
                        </td>
                        <td class="column" align="center" style="padding: 10px;">
                            <img src="http://i99393la.beget.tech/img-3.png" alt="Image 3"
                                style="width: 100%; height: auto;">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td align="center" style="padding: 20px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="column" align="center" style="padding: 10px;">
                            <img src="http://i99393la.beget.tech/img-4.png" alt="Image 4"
                                style="width: 100%; height: auto;">
                        </td>
                        <td class="column" align="left" style="padding: 10px;">
                            <h2 style="font-family: Arial, sans-serif; font-size: 18px; color: #333333;">Скидки</h2>
                            <p
                                style="font-family: Arial, sans-serif; font-size: 16px; line-height: 22px; color: #333333;">
                                Готовы сделать первый заказ? Мы приготовили для вас специальное предложение! Получите
                                скидку 10% на ваш первый заказ, использовав промокод: WELCOME10.

                            </p>
                            <a href="example.com" class="button" style="padding: 10px 20px; margin-top: 10px;">Оформить
                                заказ</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td align="center" style="padding: 20px;">
                <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 22px; color: #333333;">
                    Спасибо, что выбрали нас! Мы ценим ваше доверие и с нетерпением ждём возможности радовать вас
                    цветами, которые делают жизнь ярче.
                </p>
                <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 22px; color: #333333;">
                    С любовью,
                    Команда FLOWY
                </p>
            </td>
        </tr>
    </table>
    <!-- Подвал с контактной информацией и логотипом -->
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="footer-table">
        <tr>
            <td align="center"
                style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px;">
                <p>Вы получили это письмо, так как согласились с рассылкой на нашем сайте. </p>
                <div class="social-icons">
                    <!-- Иконки социальных сетей с абсолютными URL -->
                    <a href="https://viber.com" style="text-decoration: none;"><i class="fa-brands fa-viber fa-xl"
                            style="color: #B197FC;"></i></a>
                    <a href="https://whatsapp.com" style="text-decoration: none;"><i class="fa-brands fa-whatsapp fa-xl"
                            style="color: #B197FC;"></i></a>
                    <a href="https://desktop.telegram.org" style="text-decoration: none;"><i
                            class="fa-brands fa-telegram fa-xl" style="color: #B197FC;"></i></a>
                    <a href="https://youtube.com" style="text-decoration: none;"><i class="fa-brands fa-youtube fa-xl"
                            style="color: #B197FC; margin: 0 5px;" width="24" height="24"></i> </a>
                </div>
                <p>Москва<br>Большая Академическая, 61<br><a href="unsubscribe.php"
                        style="color: #000000;">Отписаться</a></p>
                <p style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;"><img
                        src="http://i99393la.beget.tech/flowy.png" alt="logo"></p>
            </td>
        </tr>
    </table>
    <!--[if (gte mso 9)|(IE)]>
            </td>
        </tr>
    </table>
    <![endif]-->
</body>

</html>
`

;


  var plainBody = " Привет от FLOWY! \nБлагодарим вас за выбор FLOWY! Мы рады приветствовать вас в нашей цветочной семье, где каждый букет создаётся с любовью и заботой.Мы стремимся превратить каждый ваш заказ в уникальный опыт, и вот почему:\nПерсонализированные букеты \nМы понимаем, как важно передать чувства через цветы. Наши флористы создадут уникальный букет, который будет отражать ваши эмоции и пожелания.\nБыстрая и надёжная доставка\nДоставка в любое удобное для вас время и место. Мы гарантируем свежесть и качество наших цветов, независимо от расстояния \nСкидки\nГотовы сделать первый заказ? Мы приготовили для вас специальное предложение! Получите скидку 10% на ваш первый заказ, использовав промокод: WELCOME10.\nСпасибо, что выбрали нас! Мы ценим ваше доверие и с нетерпением ждём возможности радовать вас цветами, которые делают жизнь ярче.\n С любовью,команда FLOWY\nВы получили это письмо, так как согласились с рассылкой на нашем сайте. ";

  // Отправляем письмо
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: htmlBody,
    body: plainBody
  });
}
