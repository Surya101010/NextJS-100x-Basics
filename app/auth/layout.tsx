export default function AuthLayout({children} :any){
    return(<div >
        <div className="border-b ">
        navbar
        </div>
        {children}
    </div>)
}