import AwsServerlessExpressMiddleware from 'aws-serverless-express/middleware';

app.get('', cors(), async (req, res) => {
    res.send('Successful!')
});

if (DEVELOPMENT_MODE) {
    app.listen(4040, () => {
        console.info('Listening on port 4040');
    });
}

export default app;
