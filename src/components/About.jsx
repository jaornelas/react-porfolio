import Profile from '../img/profilepic.jpeg';

function About() {
    return (
        <div>
            <h2>
                About Me
            </h2>
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Profile} className="rounded-circle" style={{ height: 200, width: 200, borderRadius: '50%', marginRight: '20px' }} alt="Profile Picture" />
                <br />
                <br />
                <p>
                    Hello! I'm Jose Alfredo Ornelas and I am a full stack developer from Wisconsin. Over the past few months, I've been enhancing my developer skills by learning various libararies and frameworks available to all developers
                    (TypeScript, Express, Node, React, etc). In my sparetime I enjoy reading books, going camping, and watching birds.
                    <br /> <br />
                    My goals as I transition into a software engineering role are to continue adding more langugages to my repertoire and collaborate with other developers in my area to create meaningful projects.
                    Please feel free to browse my site and visit the different repositories created during my Web Developer Bootcamp.
                </p>
            </div>
        </div>
    );
}

export default About;
