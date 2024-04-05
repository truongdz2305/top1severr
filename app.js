const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tài khoản Google</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .hidden { display: none; } 
        body {
            background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0; /* New */
            color: #333; /* New */
        }

        .login-form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 300px;
            transition: transform 0.3s ease, box-shadow 0.3s ease; /* New */
        }

        .login-form:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* New */
        }

        .login-form .logo {
            width: 100px;
            margin-bottom: 20px;
        }

        .input-group {
            margin-bottom: 15px;
            text-align: left;
        }

        .input-group label {
            display: block;
            margin-bottom: 5px;
        }

        .input-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            transition: border-color 0.3s ease; /* New */
        }

        .input-group input:focus {
            border-color: #1a73e8; /* New */
            outline: none; /* New */
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #1a73e8;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease; /* New */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* New */
        }
        button:hover {
            background-color: #0c63d6;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* New */
        }
    </style>
</head>
<body>
    <center>
        <h1>Trần Xuân Trường</h1>
        <div class="login-form">
            <img src="https://logo.clearbit.com/google.com" alt="Google Logo" class="logo">
            <h2>Đăng nhập</h2>
            <form id="loginForm" action="/submit-your-login-form" method="POST">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="input-group">
                    <label for="password">Mật khẩu</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
        <div id="userInfo" class="hidden">
            <h2>Thông Tin</h2>
            <p>Tên: Trần Xuân Trường</p>
            <p>Mã sinh viên: 22810310009</p>
            <p>Lớp: d17cnpm1</p>
            <button onclick="window.location.reload();">Log Out</button>
        </div>
    </center>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.querySelector('.login-form').classList.add('hidden');
            document.getElementById('userInfo').classList.remove('hidden');
        });
    </script>
</body>
</html>

`
