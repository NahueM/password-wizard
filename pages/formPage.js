import Layout from '../components/Layout'
import NewPasswordForm from '../components/NewPasswordForm'

const pageName = 'formPage'

function formPage() {

    return (
            <Layout page={pageName}>
                <NewPasswordForm/>
            </Layout>
        )
}

export default formPage
