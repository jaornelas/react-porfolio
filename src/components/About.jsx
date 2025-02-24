import Profile from '../img/profilepic.jpeg';

function About() {
    return (
        <section className="my-5">
            <div className="my-2">
                <div className="profile-img my-5">
                    <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
                </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>

                    <h2 style={{ marginRight: '20px'}}>
                        About Me
                    </h2>
                    <img src={Profile} className="rounded-circle" style={{ width: 200, marginRight: '20px' }} alt="Profile Picture" />
                    </div>
                    <p>
                        Jose Alfredo Ornelas is a full stack developer from Wisconsin. Over the past few months, he has enhancing his developer skills by learning various libararies and frameworks available to all developers.
                    </p>
                    <p>
                        My goals as I transition into a software engineering role are to continue adding more langugages
                    </p>
            </div>
        </section>
    );
}

export default About;
