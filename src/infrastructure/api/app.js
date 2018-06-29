import AwsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import Express from 'express';
import cors from 'cors';

const { DEVELOPMENT_MODE } = process.env;

const app = Express();
app.use(AwsServerlessExpressMiddleware.eventContext());

app.get('', cors(), async (req, res) => {
    res.send('Successful!')
});

if (DEVELOPMENT_MODE) {
    app.listen(4040, () => {
        console.info('Listening on port 4040');
    });
}

export default app;
