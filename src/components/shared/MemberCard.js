import React from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Octokit } from '@octokit/core';

const CardContainer = styled.div`
  width: 355px;
  height: 225px;
  min-width: 355px;
  border-radius: 20px;

  background: radial-gradient(rgba(159, 195, 212, 0.1), rgba(159, 195, 212, 0.1));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  margin: 15px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BoldHeading = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #9fc3d4;
  margin: 0;
  margin-bottom: 5px;
`;

const NormalPara = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #9fc3d4;
  margin: 0;
`;

const SingleStatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const StatsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100%;
  margin: 0px;
  background-color: #385d6f;
`;

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SecondRow = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 25px;
`;

const ThirdRow = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 25px;
`;

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });

const MemberCard = ({ member }) => {
  const [user, setUser] = React.useState({
    name: 'loading',
    img: 'https://res.cloudinary.com/dscnitrourkela/image/upload/Gitwars/xm6ww3pkeaj7kys3kvdg.png',
    description: 'loading',
  });

  const [stats, setStats] = React.useState([
    {
      name: 'repos',
      count: 237,
    },
    {
      name: 'commits',
      count: '10k',
    },
    {
      name: 'orgs',
      count: 52,
    },
  ]);

  React.useEffect(() => {
    const fetchUser = async () => {
      const { user: ghUser } = await octokit.graphql(
        `query ($login: String!) {
          user(login: $login) {
            name
            bio
            avatarUrl
            organizations {
              totalCount
            }
            contributionsCollection {
              totalRepositoryContributions
              contributionCalendar {
                colors
                totalContributions
              }
            }
          }
        }`,
        { login: member.github },
      );
      setUser({
        name: ghUser.name,
        description: ghUser.bio,
        img: ghUser.avatarUrl,
      });

      setStats((current) =>
        current.map((item) =>
          item.name === 'commits'
            ? {
                name: 'commits',
                count: ghUser.contributionsCollection.contributionCalendar.totalContributions,
              }
            : item,
        ),
      );

      setStats((current) =>
        current.map((item) =>
          item.name === 'repos'
            ? {
                name: 'repos',
                count: ghUser.contributionsCollection.totalRepositoryContributions,
              }
            : item,
        ),
      );
      setStats((current) =>
        current.map((item) =>
          item.name === 'orgs'
            ? {
                name: 'orgs',
                count: ghUser.organizations.totalCount,
              }
            : item,
        ),
      );
    };

    fetchUser();
  }, [member.github]);

  return (
    <CardContainer>
      <FirstRow>
        <UserImage src={user.img} alt={user.name} />
        <StatsContainer>
          {stats.map(({ name, count }) => (
            <SingleStatContainer key={`${name}-${count}`}>
              <BoldHeading>{count}</BoldHeading>
              <NormalPara>{name}</NormalPara>
            </SingleStatContainer>
          ))}
        </StatsContainer>
      </FirstRow>

      <SecondRow>
        <BoldHeading style={{ fontSize: '16px', marginBottom: '5px' }}>{user.name}</BoldHeading>
        <NormalPara
          style={{
            fontSize: '14px',
            fontWeight: '300',
            letterSpacing: '0.5px',
            lineHeight: '16px',
          }}
        >
          {user.description}
        </NormalPara>
      </SecondRow>

      <ThirdRow>
        {member.twitter && (
          <a href={member.twitter} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon size='lg' icon={faTwitter} color='#9FC3D4' />
          </a>
        )}

        {member.linkedin && (
          <a href={member.linkedin} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon size='lg' icon={faLinkedin} color='#9FC3D4' />
          </a>
        )}

        {member.portfolio && (
          <a href={member.portfolio} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon size='lg' icon={faGlobe} color='#9FC3D4' />
          </a>
        )}

        <a href={`https://github.com/${member.github}`} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon size='lg' icon={faGithub} color='#9FC3D4' />
        </a>
      </ThirdRow>
    </CardContainer>
  );
};

export default MemberCard;
