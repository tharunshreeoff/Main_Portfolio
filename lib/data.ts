export const profile = {
  name: 'Tharun Shree B',
  firstName: 'Tharun',
  role: 'Data Scientist',
  roles: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'Power BI Developer', 'Python Developer'],
  tagline: 'Transforming Raw Data Into Intelligent Solutions',
  summary:
    'Motivated AI & Data Science undergraduate with hands-on experience in Machine Learning, Deep Learning, and Data Analytics through internships and end-to-end projects. Proficient in Python, Scikit-learn, XGBoost, and Power BI, with a growing focus on TensorFlow and NLP. Passionate about turning messy, real-world data into decisions people can act on.',
  location: 'Bengaluru, India',
  relocation: 'Open to relocation — Bengaluru, Chennai, Hyderabad',
  email: 'b.tharun066@gmail.com',
  phone: '+91 74186 97934',
  linkedin: 'https://linkedin.com/in/tharunshree',
  linkedinLabel: 'linkedin.com/in/tharunshree',
  github: 'https://github.com/tharunshreeoff',
  githubLabel: 'https://github.com/tharunshreeoff',
  resumeFile: '/Final_resume_tharun.pdf',
  stats: [
    { n: 5, suffix: '+', label: 'End-to-End Projects' },
    { n: 200000, suffix: '+', label: 'Records Processed', compact: true },
    { n: 30, suffix: '%', label: 'Reporting Time Saved' },
    { n: 2, suffix: '', label: 'Internships' },
  ],
};

export const education = {
  school: "Vinayaka Mission's Engineering College (VMKV)",
  degree: 'B.E. — Artificial Intelligence & Data Science',
  location: 'Salem, Tamil Nadu',
  period: 'Sep 2022 – 2026',
  cgpa: '7.5 CGPA',
  coursework: [
    'Data Analytics',
    'Data Science',
    'Machine Learning',
    'Data Engineering',
    'Data Visualization',
    'Business Intelligence',
    'Big Data Analytics',
    'Artificial Intelligence',
  ],
};

export const experience = [
  {
    company: 'PySpiders Institute',
    role: 'Data Science Intern',
    location: 'Bengaluru, Karnataka',
    period: 'Dec 2025 – Present',
    points: [
      'Developed 5+ end-to-end Data Science and Analytics projects using Python, SQL, Scikit-learn, and Power BI — covering ingestion, EDA, model building, and reporting.',
      'Processed and cleaned large-scale datasets with 200,000+ records using Pandas, NumPy, and SQL, resolving missing values, duplicates, and outliers.',
      'Designed ETL workflows including extraction, transformation, and feature engineering to improve dataset quality for ML and analytics.',
      'Built interactive Power BI dashboards with Power Query, DAX, and KPI cards — cutting manual reporting effort by ~30%.',
      'Designed and interpreted A/B tests to validate analytical hypotheses and support data-driven decisions.',
      'Optimized SQL queries using JOINs, CTEs, subqueries, and window functions for efficient reporting.',
    ],
  },
  {
    company: 'NoviTech R&D Private Limited',
    role: 'Machine Learning Intern',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Built and deployed predictive ML models (Logistic Regression, Random Forest, XGBoost) across the full model development lifecycle.',
      'Applied feature engineering, hyperparameter tuning, and cross-validation to optimize accuracy, precision, and recall.',
      'Performed data preprocessing, EDA, and model evaluation using Python, Pandas, NumPy, and Scikit-learn.',
    ],
  },
];

export const projects = [
  {
    slug: 'intelligent-video-surveillance',
    title: 'Intelligent Video Surveillance',
    tag: 'Computer Vision · Deep Learning',
    summary:
      'Real-time vehicle detection, multi-object tracking, and speed estimation system for automated traffic monitoring.',
    problem: 'Manual traffic monitoring is slow and error-prone at scale.',
    approach:
      'Built a real-time pipeline using YOLOv5 for detection, DeepSORT-style tracking for object continuity, and frame-distance calibration for speed estimation.',
    stack: ['Python', 'YOLOv5', 'OpenCV', 'Computer Vision'],
    impact: 'Improved automated vehicle analytics and traffic monitoring accuracy over manual review.',
    github: 'https://github.com/tharunshreeoff/object-detection-speed-tracking-',
  },
  {
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    tag: 'Machine Learning',
    summary: 'End-to-end fraud detection pipeline on highly imbalanced transaction data.',
    problem: 'Fraudulent transactions are rare, making imbalanced classification a core challenge.',
    approach:
      'Applied SMOTE for class balancing, engineered features with Pipeline/ColumnTransformer, and tuned XGBoost with GridSearchCV.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE'],
    impact: '99.52% accuracy and 86.73% recall on held-out fraud cases.',
    github: 'https://github.com/tharunshreeoff/Credit-Card-Fraud-Detection',
  },
  {
    slug: 'crypto-market-analysis',
    title: 'Cryptocurrency Market Analysis',
    tag: 'Data Analytics',
    summary: 'Exploratory analysis of crypto market trends, volatility, and correlations.',
    problem: 'Investors need clear signal from noisy, fast-moving market data.',
    approach:
      'Cleaned and transformed multi-asset price data, then built visualizations to evaluate trend, volume, and cross-asset correlation.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    impact: 'Delivered visual insights supporting data-driven investment analysis.',
    github: 'https://github.com/tharunshreeoff/Crypto-Currency-Market-Analysis',
  },
  {
    slug: 'zepto-sales-dashboard',
    title: 'Zepto Sales Analysis Dashboard',
    tag: 'Power BI · Business Intelligence',
    summary: 'Interactive BI dashboard tracking sales, customer behavior, and revenue growth.',
    problem: 'Leadership needed a single view of sales performance across products and time.',
    approach: 'Modeled data with Power Query and DAX, then built KPI-driven dashboards for self-serve reporting.',
    stack: ['Power BI', 'Power Query', 'DAX', 'Data Modeling'],
    impact: 'Automated recurring reporting and surfaced actionable product-performance insights.',
    github: 'https://github.com/tharunshreeoff/Zepto-Sales',
  },
];

export const skillGroups = [
  {
    key: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    key: 'ml',
    label: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 88 },
      { name: 'XGBoost', level: 85 },
      { name: 'Feature Engineering', level: 82 },
      { name: 'Model Evaluation', level: 84 },
    ],
  },
  {
    key: 'dl',
    label: 'Deep Learning & CV',
    skills: [
      { name: 'TensorFlow', level: 65 },
      { name: 'YOLOv5', level: 78 },
      { name: 'OpenCV', level: 75 },
    ],
  },
  {
    key: 'bi',
    label: 'BI & Visualization',
    skills: [
      { name: 'Power BI', level: 88 },
      { name: 'DAX', level: 80 },
      { name: 'Excel', level: 78 },
    ],
  },
  {
    key: 'data',
    label: 'Data & Big Data',
    skills: [
      { name: 'Pandas / NumPy', level: 90 },
      { name: 'ETL', level: 80 },
      { name: 'PySpark', level: 60 },
      { name: 'Hadoop / HDFS', level: 55 },
    ],
  },
];

export const techStack = [
  'Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'TensorFlow',
  'OpenCV', 'Power BI', 'DAX', 'Excel', 'PySpark', 'Hadoop', 'Snowflake',
  'Databricks', 'Git', 'GitHub', 'Jupyter', 'VS Code',
];

export const certifications = [
  {
    title: 'Machine Learning Internship Certificate',
    org: 'NoviTech R&D Private Limited',
    period: 'Jun 2025 – Jul 2025',
    drive_link:'https://drive.google.com/file/d/15OMKbQ2B7BHygbJYn_Ol462e55e7oKeJ/view?usp=sharing',
  },
  {
    title: 'Data Analytics Job Simulation',
    org: 'Deloitte × Forage',
    period: 'Jun 2026',
    drive_link:'https://drive.google.com/file/d/1Ava7mWKe14vRAiTX5Wma1JVbDj8O3RYs/view?usp=sharing',
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    org: 'Tata × Forage',
    period: 'Jun 2026',
    drive_link:'https://drive.google.com/file/d/1OkDzxNh5n0RO4kVcMyb2QUhF3jCRojV3/view?usp=sharing',
  },
  {
    title: 'Green Skills and Artificial Intelligence',
    org: 'Edunet Foundation, AICTE & Shell',
    period: 'Jan 2025',
    drive_link:'https://drive.google.com/file/d/1M8eBtZY8gCi12XdQqkI0Ysf9oLOG_It3/view?usp=sharing',
  },
];
