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
            /* Updated background for a more appealing gradient */
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: #333;
            font-family: Arial, sans-serif;
        }
    
        .login-form {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px; /* More rounded corners */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 280px; /* Slightly narrower */
            transition: all 0.3s ease;
        }
    
        .login-form:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
    
        .login-form .logo {
            width: 80px; 
            margin-bottom: 20px;
        }
    
        .input-group {
            margin-bottom: 20px;
            text-align: left;
        }
    
        .input-group label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px; 
        }
    
        .input-group input {
            width: calc(100% - 24px); 
            padding: 10px 12px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 20px; 
            transition: border-color 0.3s ease;
        }
    
        .input-group input:focus {
            border-color: #f5576c;
            outline: none;
        }
    
        button {
            width: calc(100% - 24px); 
            padding: 10px 12px;
            background-image: linear-gradient(to right, #f093fb, #f5576c);
            color: white;
            border: none;
            border-radius: 20px; 
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            font-weight: bold;
        }
        button:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
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
