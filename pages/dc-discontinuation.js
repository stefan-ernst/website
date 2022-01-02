import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import {useRouter} from "next/router";

export default function DcDiscontinuation() {

    const router = useRouter();

    return (
        <>
            <Header canonical={router.pathname} title="Discontinuation of Confluence Apps" description="Announcement regarding availability of Data Center approved apps for Atlassian Confluence" />
            <div className='grid-container'>
                <Navigation isWhite />

                <main className='Main'>
                    <p className='Content'>
                        <div className={'text blog'}>

                            <h1>Discontinuation of Confluence Apps</h1>
                            <p>
                                <em>This announcement does not apply to any of our apps for Jira Data Center</em>
<br />
                                <br />
                                Due to economic reasons, we are discontinuing the following apps that are approved for Confluence Data Center:
                                <ul>
                                    <li>Enhanced Sharing for Confluence</li>
                                    <li>Personal Dashboards for Confluence</li>
                                    <li>Read Confirmations for Confluence</li>
                                </ul>
                                <br />

                                We have decided not to re-certify these apps with Atlassian, <br />which means they have lost their DC approved status
                                as of January 1st 2022.

                            </p>


                            <h2>What this means for you</h2>

                            <h3>Data Center customers</h3>
                            <p>
                                If you currently have a DC approved app installed on a DC instance, and you have an active license, your
                                app will continue to work and is supported by us until the end of the subscription.
                                Since the license can not be renewed, the app will stop working after the end of the subscription.
                                You can however use the Server version of the app, see below.
                            </p>

                            <h3>Server customers</h3>

                            <p>
                                All apps are supported and will continue to work until the end of support for the host products, which is Atlassian's
                                end of support date for Server products in 2024.
                            </p>

                            <h3>Cloud customers</h3>


                            <p>
                                We have decided to focus on product development for Atlassian Jira.
                                <br />
                                None of the apps mentioned here are available for Cloud or will be available for Cloud.
                                There are also technical limitations which prevented us from releasing cloud versions of
                                these apps.
                            </p>

                            <h2>Switching from DC to Server</h2>

                            <p>
                                Since very few customers have DC approved apps and a paid license, this section mostly
                                applies to users of the free Personal Dashboards for Confluence app.
                                This app does not have a license check, it will continue to work normally. However,
                                you have to manually check the Atlassian Marketplace for updates.
                            </p>
                            <p>
                                If you are one of the customers of the DC approved apps, you can switch to the Server version
                                for the time being. You need to purchase the Server license before the end of app sales date on February 2, 2023.
                            </p>
                            <p>
                                We thank you for your understanding and support.
                            </p>
                            <br />
                        </div>
                    </p>
                </main>

                <Footer isWhite />
            </div>
        </>
    );
}