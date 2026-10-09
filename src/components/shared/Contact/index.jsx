export function Contact() {
    return (
        <>
            <section className="py-5 bg-body-tertiary">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Contact Us</h2>
                        <p className="text-body-secondary">
                            Have a question or need help finding your next favorite
                            book? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4 p-md-5">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    htmlFor="email"
                                                    className="form-label"
                                                >
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    htmlFor="subject"
                                                    className="form-label"
                                                >
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="What is this about?"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    htmlFor="message"
                                                    className="form-label"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    rows="5"
                                                    placeholder="Write your message here..."
                                                    required
                                                ></textarea>
                                            </div>

                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary px-4"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center mt-5 g-4">
                        <div className="col-md-4">
                            <h5 className="fw-semibold">Email</h5>
                            <p className="text-body-secondary">
                                adinda@bookstore.com
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h5 className="fw-semibold">Phone</h5>
                            <p className="text-body-secondary">
                                +62 882-9678-7962
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h5 className="fw-semibold">Location</h5>
                            <p className="text-body-secondary">
                                Depok, Indonesia
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;