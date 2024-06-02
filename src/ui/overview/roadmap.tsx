import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import rmapline from '../../icons/home/rmapline.svg'
import Heading from "@/theme/components/heading";
import { makeStyles } from '@mui/styles';
import Text from "@/theme/components/text";
import mleft from '../../icons/home/mleft.svg'
import mright from '../../icons/home/mright.svg'
import Link from "next/link";
import shield from '../../icons/home/shield.svg'


const useStyles = makeStyles({
  heading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    marginTop: '5rem',
    '@media(max-width : 900px)': {
      marginTop: '0rem',
    }

  },

  comingSoon: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem'
  },
  phase: {
    backgroundColor: '#00FFFF',
    padding: '10px 20px',
    borderRadius: '30px',
    display: 'inline-block',
    color: '#000'
  },
  round: {
    backgroundColor: '#fff',
    height: '10px',
    width: '10px',
    borderRadius: '30px',
    padding: '5px',
    '@media(max-width : 900px)':{
      display:'none'
    }
  },
  stepBox: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1rem',
    marginTop: '1rem',
    '@media(max-width : 900px)': {
      display:'inherit'
    }
  },
  main__box: {
    padding: '4rem',
    '@media(max-width : 900px)': {
      padding: '1.5rem',
    }
  },
  stepBox_img: {
    marginTop: '2rem',
    textAlign: 'center'
  },
  btn: {
    backgroundColor: '#00FFFF !important',
    color: '#000',
    padding: '14px 22px',
    display: 'inline-flex',
    textDecoration: 'none',
    fontWeight: '700 !important',
    borderRadius: '5rem',
    width: '230px',
    justifyContent: 'center',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: '#00FFFF !important',
      color: "#000",
      transform: 'translateY(-5px)'
    }
  },
  btn_wrp: {
    textAlign: 'center',
    marginTop: '2rem'
  },
  roadmap_dex: {
    marginTop: '5rem'
  },
  forDesk: {
    '@media(max-width : 900px)': {
      display: 'none'
    }
  },
  forMob: {

    display: 'none',
    '@media(max-width : 900px)': {
      display: 'block',
      paddingLeft: '5rem',
      '@media(max-width : 900px)': {
        display: 'block',
        paddingLeft: '1rem',
        textAlign: 'center'
      }
    }
  },
  rmapline: {
    '@media(max-width : 600px)': {
      display: 'none'
    }
  },
  shield: {
    position: 'absolute',
    top: '30rem',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  boxRmp:{
    border:'1px solid #1D1D20',
    backgroundColor:'#101012',
    borderRadius:'10px',
    padding:'10px',
    width:'100%'
  }
})



const Roadmap = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main__box}>
      <Box>
        <Box className={classes.heading}>
          <Heading heading={'Roadmap'} />
        </Box>
        <Box className={classes.comingSoon}>
          <Typography sx={{
            '@media(max-width : 900px)': { fontSize: '18px', textAlign: 'center' }
          }} variant="h4" fontFamily={'Bruce Forever !important'}>Build the Future with MumbleChat</Typography>

        </Box>
        <Box textAlign={'center'} mt={1}>
          <Text text={"The MumbleChat MMCT roadmap outlines the key milestones and development stages of the platform, providing a timeline for the implementation of features, upgrades, and expansions"} />
        </Box>
      </Box>

      <Box className={classes.forDesk}>
        <Box className={classes.roadmap_dex}>
          <Grid container spacing={0}>
            <Grid item lg={5.5} md={5.5}>
              <Box>
                <Box className={classes.phase}><Typography>Q2 2024</Typography></Box>
                <Typography variant="h6" mt={1}>Launch of MMCT ICO</Typography>


                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Begin initial marketing and outreach for the ICO."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Develop ICO smart contracts and platform."} />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image src={mleft} alt={""} />
                </Box>

              </Box>

              <Box>

                <Box className={classes.phase}><Typography>Q4 2024</Typography></Box>
                <Typography variant="h6" mt={1}>Launch MMCT Platform</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Develop and test the MMCT platform."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Implement necessary security measures."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Ensure compliance with regulations."} />
                </Box>
                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Launch the MMCT platform to the public."} />
                </Box>
                <Box className={classes.stepBox_img}>
                  <Image src={mleft} alt={""} />
                </Box>
              </Box>

              <Box>

                <Box className={classes.phase}><Typography>Q2 2025</Typography></Box>
                <Typography variant="h6" mt={1}>User Engagement Rewards</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Implement a reward system to incentivize user engagement on the MMCT platform."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Reward users for actions such as transactions, referrals, and active participation in the community."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Design and launch reward programs to encourage long-term user retention and loyalty."} />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image src={mleft} alt={""} />
                </Box>
              </Box>

              <Box>

                <Box className={classes.phase}><Typography>Q4 2025</Typography></Box>
                <Typography variant="h6" mt={1}>Video Call Feature</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Implement a video call feature on the MMCT platform, allowing users to conduct video calls seamlessly."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Ensure high-quality video streaming and encryption for secure communication."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Integrate additional features such as screen sharing and group video calls to enhance user experience and collaboration."} />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image src={mleft} alt={""} />
                </Box>
              </Box>

              <Box>

                <Box className={classes.phase}><Typography>Q2 2026</Typography></Box>
                <Typography variant="h6" mt={1}>Global Expansion</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Explore opportunities for global expansion and market penetration."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Identify key markets for MMCT adoption and develop localized strategies for user acquisition and engagement."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Expand language support and customer service to cater to diverse user demographics worldwide."} />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image src={mleft} alt={""} />
                </Box>
              </Box>

              <Box>

                <Box className={classes.phase}><Typography>Q4 2026</Typography></Box>
                <Typography variant="h6" mt={1}>Continuous Innovation*</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Invest in research and development to stay at the forefront of technological innovation."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Explore emerging technologies such as AI, IoT, and decentralized finance (DeFi) to enhance the MMCT platform's capabilities."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Collaborate with industry partners and academic institutions to drive innovation and create value for MMCT users."} />
                </Box>
              </Box>

            </Grid>
            <Grid item lg={1} md={1} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

              <Box
                sx={{
                  backgroundColor: '#101012',
                  padding: '2px',
                  height: '100%',
                  border: '1px solid #1D1D20',
                  borderRadius: '30px',
                  width: 'fit-content'
                }}
              >
                <Image src={rmapline} alt={""} />
              </Box>
              <Image className={classes.shield} src={shield} alt={""} />

            </Grid>
            <Grid item lg={5.5} md={5.5}>

              <Box>
                <Box className={classes.stepBox_img}>
                  <Image src={mright} alt={""} />
                </Box>
                <Box className={classes.phase}><Typography>Q3 2024</Typography></Box>
                <Typography variant="h6" mt={1}>Completion of ICO All Phases</Typography>


                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Execute ICO marketing campaigns."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Conduct public and private sale phases."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Finalize token distribution and allocation."} />
                </Box>



              </Box>

              <Box>
                <Box className={classes.stepBox_img}>
                  <Image src={mright} alt={""} />
                </Box>
                <Box className={classes.phase}><Typography>Q1 2025</Typography></Box>
                <Typography variant="h6" mt={1}>Integration</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Foster partnerships and collaborations."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Integrate MMCT into existing financial systems and services."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Enhance platform functionality based on user feedback."} />
                </Box>
                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Continuously improve security and scalability of the platform."} />
                </Box>

              </Box>

              <Box>
                <Box className={classes.stepBox_img}>
                  <Image src={mright} alt={""} />
                </Box>
                <Box className={classes.phase}><Typography>Q3 2025</Typography></Box>
                <Typography variant="h6" mt={1}>Voice Call Feature</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Develop and integrate a voice call feature into the MMCT platform."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Enable users to make voice calls securely within the platform using encryption protocols."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Enhance communication capabilities for users to facilitate real-time interactions and collaboration."} />
                </Box>


              </Box>

              <Box>
                <Box className={classes.stepBox_img}>
                  <Image src={mright} alt={""} />
                </Box>
                <Box className={classes.phase}><Typography> Q1 2026</Typography></Box>
                <Typography variant="h6" mt={1}>Optimization and Feedback</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Gather user feedback on the newly implemented features, including user engagement rewards, voice calls, and video calls."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Analyze usage data and user feedback to identify areas for optimization and improvement."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Iteratively enhance the platform based on user insights and technological advancements."} />
                </Box>


              </Box>

              <Box>
                <Box className={classes.stepBox_img}>
                  <Image src={mright} alt={""} />
                </Box>
                <Box className={classes.phase}><Typography> Q3 2026</Typography></Box>
                <Typography variant="h6" mt={1}>Community Building and Education</Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Strengthen community engagement through educational initiatives, webinars, and workshops."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"- Empower users with knowledge about blockchain technology,cryptocurrency, and the MMCT platform."} />
                </Box>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text text={"Foster a supportive and informed community to drive platform growth and adoption."} />
                </Box>


              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={classes.forMob}>
        <Box className={classes.roadmap_dex}>
          <Grid container spacing={2}>
            <Box className={classes.boxRmp}>
              <Box className={classes.phase}><Typography>Q2 2024</Typography></Box>
              <Typography variant="h6" mt={1}>Launch of MMCT ICO</Typography>


              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Begin initial marketing and outreach for the ICO."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Develop ICO smart contracts and platform."} />
              </Box>



            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography>Q3 2024</Typography></Box>
              <Typography variant="h6" mt={1}>Completion of ICO All Phases</Typography>


              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Execute ICO marketing campaigns."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Conduct public and private sale phases."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Finalize token distribution and allocation."} />
              </Box>



            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography>Q4 2024</Typography></Box>
              <Typography variant="h6" mt={1}>Launch MMCT Platform</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Develop and test the MMCT platform."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Implement necessary security measures."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Ensure compliance with regulations."} />
              </Box>
              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Launch the MMCT platform to the public."} />
              </Box>

            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography>Q1 2025</Typography></Box>
              <Typography variant="h6" mt={1}>Integration</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Foster partnerships and collaborations."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Integrate MMCT into existing financial systems and services."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Enhance platform functionality based on user feedback."} />
              </Box>
              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Continuously improve security and scalability of the platform."} />
              </Box>

            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography>Q2 2025</Typography></Box>
              <Typography variant="h6" mt={1}>User Engagement Rewards</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Implement a reward system to incentivize user engagement on the MMCT platform."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Reward users for actions such as transactions, referrals, and active participation in the community."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Design and launch reward programs to encourage long-term user retention and loyalty."} />
              </Box>


            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography>Q3 2025</Typography></Box>
              <Typography variant="h6" mt={1}>Voice Call Feature</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Develop and integrate a voice call feature into the MMCT platform."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Enable users to make voice calls securely within the platform using encryption protocols."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Enhance communication capabilities for users to facilitate real-time interactions and collaboration."} />
              </Box>


            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography>Q4 2025</Typography></Box>
              <Typography variant="h6" mt={1}>Video Call Feature</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Implement a video call feature on the MMCT platform, allowing users to conduct video calls seamlessly."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Ensure high-quality video streaming and encryption for secure communication."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Integrate additional features such as screen sharing and group video calls to enhance user experience and collaboration."} />
              </Box>


            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography> Q1 2026</Typography></Box>
              <Typography variant="h6" mt={1}>Optimization and Feedback</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Gather user feedback on the newly implemented features, including user engagement rewards, voice calls, and video calls."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Analyze usage data and user feedback to identify areas for optimization and improvement."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Iteratively enhance the platform based on user insights and technological advancements."} />
              </Box>


            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography>Q2 2026</Typography></Box>
              <Typography variant="h6" mt={1}>Global Expansion</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Explore opportunities for global expansion and market penetration."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Identify key markets for MMCT adoption and develop localized strategies for user acquisition and engagement."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Expand language support and customer service to cater to diverse user demographics worldwide."} />
              </Box>


            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography> Q3 2026</Typography></Box>
              <Typography variant="h6" mt={1}>Community Building and Education</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Strengthen community engagement through educational initiatives, webinars, and workshops."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"- Empower users with knowledge about blockchain technology,cryptocurrency, and the MMCT platform."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Foster a supportive and informed community to drive platform growth and adoption."} />
              </Box>


            </Box>

            <Box className={classes.boxRmp} mt={5}>

              <Box className={classes.phase}><Typography>Q4 2026</Typography></Box>
              <Typography variant="h6" mt={1}>Continuous Innovation*</Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Invest in research and development to stay at the forefront of technological innovation."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Explore emerging technologies such as AI, IoT, and decentralized finance (DeFi) to enhance the MMCT platform's capabilities."} />
              </Box>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text text={"Collaborate with industry partners and academic institutions to drive innovation and create value for MMCT users."} />
              </Box>
            </Box>


          </Grid>
        </Box>
      </Box>

      <Box className={classes.btn_wrp}>
        <Link className={classes.btn} href={""}>
          <Typography>Download Roadmap</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Roadmap;
