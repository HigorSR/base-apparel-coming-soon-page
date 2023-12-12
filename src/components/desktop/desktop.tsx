import CardDesktop from "./card-desktop";

function MobileComponent() {
    return (
        <div className="flex items-center justify-center gap-36">
            <div className="h-screen"></div>
            <CardDesktop />
        </div>
    );
}

export default MobileComponent;
