export const metadata = {
    title: 'Dealership Inline Banners'
};

function IframeWidget() {
    return (
        <div className="bg-white text-neutral-600 my-6" style={{ width: '100%', overflow: 'hidden' }}>
            <div className="text-3xl px-8 pt-8">Dealership Inline Banners</div>
            <div className="py-4">
                <iframe 
                    src="https://miai.retool.com/embedded/public/c4ae30c6-59bd-41c6-9c17-a8ebe9044d41" 
                    width="100%" 
                    height="800px" 
                    style={{ border: 'none', width: '100vw' }}
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
