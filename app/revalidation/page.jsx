export const metadata = {
    title: 'Dealership Inline Banners'
};

function IframeWidget() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw', overflow: 'hidden' }}>
            <div style={{ width: '100%', textAlign: 'center', padding: '20px 0' }}>
                <h1 className="text-3xl">Dealership Inline Banners</h1>
            </div>
            <div style={{ width: '100%', height: '100vh' }}>
                <iframe 
                    src="https://miai.retool.com/embedded/public/c4ae30c6-59bd-41c6-9c17-a8ebe9044d41" 
                    style={{ border: 'none', width: '100%', height: '100%' }}
                    title="Dealership Inline Banners"
                />
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <>
            <IframeWidget />
        </>
    );
}
