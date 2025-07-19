import { useNavigate } from 'react-router-dom'
import { TbCannabis, TbLeaf, TbBrain, TbHeart, TbShield, TbUsers, TbArrowLeft } from 'react-icons/tb'
import styles from './about.module.css'

function About() {
  const navigate = useNavigate()

  return (
    <div className={styles.about}>
      {/* Back Button */}
      <button className={styles.backButton} onClick={() => navigate('/')}>
        <TbArrowLeft size={20} />
        Back to Chat
      </button>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <TbCannabis className={styles.heroLogo} size={80} strokeWidth={1} />
          <h1 className={styles.heroTitle}>
            Your Personal Cannabis
            <br />
            Knowledge Companion
          </h1>
          <p className={styles.heroDescription}>
            Flora is an AI-powered cannabis education platform that provides accurate, 
            evidence-based information about cannabis strains, effects, and wellness applications.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>Strain Profiles</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Questions Answered</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Available Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Comprehensive Cannabis Education</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <TbLeaf className={styles.featureIcon} size={40} />
            <h3>Strain Information</h3>
            <p>Detailed profiles of cannabis strains including effects, terpenes, and medical applications.</p>
          </div>
          <div className={styles.feature}>
            <TbBrain className={styles.featureIcon} size={40} />
            <h3>AI-Powered Insights</h3>
            <p>Get personalized recommendations based on your needs and preferences.</p>
          </div>
          <div className={styles.feature}>
            <TbHeart className={styles.featureIcon} size={40} />
            <h3>Wellness Focus</h3>
            <p>Evidence-based information about therapeutic benefits and wellness applications.</p>
          </div>
          <div className={styles.feature}>
            <TbShield className={styles.featureIcon} size={40} />
            <h3>Safe & Responsible</h3>
            <p>Promoting safe consumption practices and responsible cannabis use.</p>
          </div>
          <div className={styles.feature}>
            <TbUsers className={styles.featureIcon} size={40} />
            <h3>Community Driven</h3>
            <p>Built with input from cannabis enthusiasts, patients, and medical professionals.</p>
          </div>
          <div className={styles.feature}>
            <TbCannabis className={styles.featureIcon} size={40} />
            <h3>Research Based</h3>
            <p>All information backed by scientific research and peer-reviewed studies.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>
            Flora exists to demystify cannabis and provide accessible, accurate education 
            for everyone interested in learning about this remarkable plant. We believe 
            that informed decisions lead to better outcomes, whether you're exploring 
            cannabis for wellness, recreation, or medical purposes.
          </p>
          <div className={styles.missionPoints}>
            <div className={styles.point}>
              <h4>Education First</h4>
              <p>Providing clear, science-based information without bias or judgment.</p>
            </div>
            <div className={styles.point}>
              <h4>Safety Always</h4>
              <p>Promoting responsible use and harm reduction practices.</p>
            </div>
            <div className={styles.point}>
              <h4>Accessibility</h4>
              <p>Making cannabis knowledge available to everyone, regardless of experience level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className={styles.technology}>
        <h2 className={styles.sectionTitle}>Powered by Advanced AI</h2>
        <div className={styles.techContent}>
          <div className={styles.techFeature}>
            <h3>Google Gemini AI</h3>
            <p>Advanced language model providing intelligent, contextual responses</p>
          </div>
          <div className={styles.techFeature}>
            <h3>Real-time Learning</h3>
            <p>Continuously updated with the latest cannabis research and information</p>
          </div>
          <div className={styles.techFeature}>
            <h3>Natural Conversations</h3>
            <p>Ask questions in plain language and get clear, helpful answers</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Learn?</h2>
        <p>Start your cannabis education journey with Flora today.</p>
        <button className={styles.ctaButton} onClick={() => navigate('/')}>
          <TbCannabis size={20} />
          Start Chatting
        </button>
      </section>
    </div>
  )
}

export default About
