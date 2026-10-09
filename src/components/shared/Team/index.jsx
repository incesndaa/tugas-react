export function Team() {
    return (
        <>
            <div className="text-center container py-5">
                <div className="row">
                    <h1 className="fw-bold mb-5">Our Team</h1>
                    <div className="col-lg-4">
                        <img
                            src="https://img.magnific.com/foto-gratis/wanita-asia-muda-terlihat-percaya-diri-menyilangkan-tangan-di-dada-dan-tersenyum-ke-kamera-berdiri-di-sweter-oranye_1258-169253.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Book Cover"
                            className="rounded-circle mb-3"
                            width="140"
                            height="140"
                            style={{ objectFit: "cover" }}
                        />

                        <h3 className="fw-normal">Rachel</h3>

                        <p>
                            Backend developer with a passion for creating efficient and scalable web applications. Loves to explore new technologies and frameworks.
                        </p>

                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;
                            </a>
                        </p>
                    </div>
                    {/* /.col-lg-4 */}

                    <div className="col-lg-4">
                        <img
                            src="https://adindangesti.my.id/_next/image?url=%2Fmypp.png&w=1080&q=75"
                            alt="Book Cover"
                            className="rounded-circle mb-3"
                            width="140"
                            height="140"
                            style={{ objectFit: "cover" }}
                        />

                        <h3 className="fw-normal">Adinda</h3>

                        <p>
                            Frontend developer with a keen eye for design and a passion for creating intuitive user experiences. Experienced in React and modern CSS frameworks.
                        </p>

                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;
                            </a>
                        </p>
                    </div>
                    {/* /.col-lg-4 */}

                    <div className="col-lg-4">
                        <img
                            src="https://img.magnific.com/foto-gratis/wanita-asia-mengenakan-t-shirt-kasual-sedang-berpose_1258-36700.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Book Cover"
                            className="rounded-circle mb-3"
                            width="140"
                            height="140"
                            style={{ objectFit: "cover" }}
                        />

                        <h3 className="fw-normal">Xiera</h3>

                        <p>
                            Product manager with a strong background in driving product development and leading cross-functional teams. Passionate about creating innovative solutions that deliver value to users.
                        </p>

                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;
                            </a>
                        </p>
                    </div>
                    {/* /.col-lg-4 */}
                </div>
            </div>
        </>
    )
}

export default Team;