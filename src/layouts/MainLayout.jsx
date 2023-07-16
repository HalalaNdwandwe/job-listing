import TopBar from '../Components/TopBar'

const MainLayout = ({ children }) => {
    return (
        <>
            <TopBar />
            {children}
        </>
    )
}

export default MainLayout;