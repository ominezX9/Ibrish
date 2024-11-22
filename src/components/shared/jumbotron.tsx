
type JumbotronProps = {
    children: React.ReactNode;
}
export default function Jumbotron({
    children,
    
}: JumbotronProps) {
    return (
        <div className="relative bg-lightgrey px-10 py-10 rounded-lg">
            {children}
        </div>
    )
}
