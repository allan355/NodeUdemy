import { checkService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service"

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void

export class Server {

    public static start() {
        console.log("Server started!!!!!.....")

        CronService.createJob('*/5 * * * * *', async () => {
            const date = new Date();
            await new checkService(
                () => console.log('success'),
                (error) => console.error(error)
            ).execute("http://localhost:3000/")
            console.log('5 seconds')
        })
        CronService.createJob('*/3 * * * * *', () => {
            const date = new Date();
            console.log('3 seconds')
            console.log('3 seconds')
        })
        CronService.createJob('*/2 * * * * *', () => {
            const date = new Date();
            console.log('2 seconds')
        })
    }
}