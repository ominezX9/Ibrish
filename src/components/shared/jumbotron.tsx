
type JumbotronProps = {
    children: React.ReactNode;
    className?: string
}
export default function Jumbotron({
    children,
    className,
}: JumbotronProps) {
    return (
        <div className={`relative bg-lightgrey px-10 py-10 sm:rounded-[30px] rounded-[15px] overflow-hidden ${className}`}>

            {children}
        </div>
    )
}
