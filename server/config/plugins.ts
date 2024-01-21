export default ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 587),
                secure: false,
                requireTLS: false,
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
                // ... any custom nodemailer options
            },
            settings: {
                defaultFrom: env('DEFAULT_FROM', 'noreply@exapmle.com'),
                defaultReplyTo: env('DEFAULT_REPLY_TO', 'noreply@exapmle.com'),
            },
        },
    },
})