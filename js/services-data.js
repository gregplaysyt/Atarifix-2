// Sample services data with Graphic Design and Web Development
const servicesData = [
    {
        id: 1,
        title: "Graphic Design Services",
        description: "Professional graphic design solutions including logo design, branding, marketing materials, illustrations, and visual identity development that captures your brand essence.",
        longDescription: "Our graphic design services encompass the complete visual representation of your brand. We create compelling logos, cohesive brand identities, marketing collateral, packaging designs, and digital graphics that resonate with your target audience. Our design process combines strategic thinking with creative execution to deliver designs that not only look stunning but also drive business results. From initial concept development to final production files, we ensure every design element aligns with your brand strategy and business objectives.",
        icon: "fas fa-palette",
        category: "design",
        features: [
            "Logo Design & Brand Identity",
            "Marketing Collateral Design",
            "Packaging & Label Design",
            "Digital Illustrations",
            "Infographic Design",
            "Print Design & Layout",
            "Social Media Graphics",
            "Brand Style Guides"
        ]
    },
    {
        id: 2,
        title: "Web Design & Development",
        description: "Custom website design and development services creating responsive, user-friendly, and high-performing websites that convert visitors into customers.",
        longDescription: "We specialize in creating modern, responsive websites that deliver exceptional user experiences across all devices. Our web development process includes strategic planning, user experience design, responsive development, content management system integration, and ongoing maintenance. We build websites using the latest technologies and frameworks to ensure optimal performance, security, and scalability. Whether you need a simple brochure website or a complex web application, we deliver solutions that meet your business goals and provide measurable results.",
        icon: "fas fa-code",
        category: "web",
        features: [
            "Responsive Web Design",
            "E-commerce Development",
            "Content Management Systems",
            "Website Maintenance",
            "Performance Optimization",
            "SEO-friendly Development",
            "Cross-browser Compatibility",
            "Web Application Development"
        ]
    },
    {
        id: 3,
        title: "Custom Software Development",
        description: "Tailored software solutions built to meet your specific business requirements and goals with scalable architecture and modern technologies.",
        longDescription: "Our custom software development services provide businesses with tailored solutions that address unique operational challenges. We develop enterprise applications, business process automation systems, CRM solutions, and specialized software using agile methodologies. Our development process includes requirements analysis, architecture design, development, testing, deployment, and ongoing support. We ensure our solutions are scalable, secure, and integrate seamlessly with your existing systems.",
        icon: "fas fa-laptop-code",
        category: "development",
        features: [
            "Enterprise Applications",
            "Business Process Automation",
            "CRM & ERP Solutions",
            "API Development & Integration",
            "Database Design & Management",
            "Mobile Backend Development",
            "Software Testing & QA",
            "Maintenance & Support"
        ]
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android devices with intuitive user interfaces and smooth performance.",
        longDescription: "We develop high-performance mobile applications for both iOS and Android platforms. Our mobile app development services include native app development using Swift/Kotlin and cross-platform development using React Native/Flutter. We focus on creating intuitive user interfaces, smooth performance, and seamless integration with backend systems. From concept to deployment on app stores, we manage the entire development lifecycle to deliver apps that users love and businesses rely on.",
        icon: "fas fa-mobile-alt",
        category: "development",
        features: [
            "iOS App Development (Swift)",
            "Android App Development (Kotlin)",
            "Cross-platform Apps (React Native/Flutter)",
            "UI/UX Design for Mobile",
            "App Store Deployment",
            "Push Notifications",
            "In-app Purchases",
            "App Analytics Integration"
        ]
    },
    {
        id: 5,
        title: "UI/UX Design Services",
        description: "User interface and user experience design services that create intuitive, engaging, and user-friendly digital products.",
        longDescription: "Our UI/UX design services focus on creating digital experiences that are both beautiful and functional. We conduct user research, create wireframes and prototypes, design user interfaces, and perform usability testing to ensure optimal user experiences. Our design approach combines human-centered design principles with business objectives to create interfaces that users love and that drive business outcomes. We work closely with development teams to ensure seamless implementation of our designs.",
        icon: "fas fa-paint-brush",
        category: "design",
        features: [
            "User Research & Persona Development",
            "Wireframing & Prototyping",
            "User Interface Design",
            "User Experience Strategy",
            "Usability Testing",
            "Interaction Design",
            "Design Systems",
            "Accessibility Compliance"
        ]
    },
    {
        id: 6,
        title: "Cloud Migration Services",
        description: "Seamless migration of your infrastructure and applications to AWS, Azure, or Google Cloud platforms with minimal downtime.",
        longDescription: "Our cloud migration services help businesses transition smoothly to cloud environments. We assess your current infrastructure, develop a migration strategy, execute the migration with minimal downtime, and optimize cloud resources for cost-efficiency and performance. We support migrations to major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform. Our comprehensive approach ensures security, compliance, and operational efficiency throughout the migration process.",
        icon: "fas fa-cloud-upload-alt",
        category: "cloud",
        features: [
            "Cloud Strategy & Assessment",
            "AWS/Azure/GCP Migration",
            "Legacy System Migration",
            "Database Migration to Cloud",
            "Cloud Infrastructure Design",
            "Migration Testing & Validation",
            "Post-migration Optimization",
            "Cloud Cost Management"
        ]
    },
    {
        id: 7,
        title: "Cloud Infrastructure Setup",
        description: "Design and implementation of robust, scalable cloud infrastructure for your business applications.",
        longDescription: "We design and implement enterprise-grade cloud infrastructure solutions that provide scalability, reliability, and security. Our services include cloud architecture design, virtual network setup, storage solutions, compute resources provisioning, and security configurations. We implement infrastructure as code using tools like Terraform and CloudFormation to ensure consistency and reproducibility. Our cloud infrastructure solutions support your business applications with high availability and performance.",
        icon: "fas fa-server",
        category: "cloud",
        features: [
            "Cloud Architecture Design",
            "Infrastructure as Code",
            "Virtual Network Configuration",
            "Storage Solutions Setup",
            "Auto-scaling Implementation",
            "Load Balancing Configuration",
            "Disaster Recovery Setup",
            "Monitoring & Alerting"
        ]
    },
    {
        id: 8,
        title: "Cloud Security & Compliance",
        description: "Ensure your cloud environment is secure and compliant with industry standards and regulations.",
        longDescription: "Our cloud security services protect your cloud infrastructure and data from threats while ensuring compliance with industry regulations. We implement security best practices including identity and access management, network security, data encryption, threat detection, and security monitoring. We help businesses achieve compliance with standards like GDPR, HIPAA, PCI DSS, and SOC 2. Our security assessments identify vulnerabilities and our remediation services strengthen your cloud security posture.",
        icon: "fas fa-shield-alt",
        category: "cloud",
        features: [
            "Cloud Security Assessment",
            "Identity & Access Management",
            "Data Encryption Implementation",
            "Network Security Configuration",
            "Threat Detection & Prevention",
            "Security Monitoring & Logging",
            "Compliance Management",
            "Security Incident Response"
        ]
    },
    {
        id: 9,
        title: "Cybersecurity Assessment",
        description: "Comprehensive security audits and vulnerability assessments for your IT systems and networks.",
        longDescription: "We provide thorough cybersecurity assessments to identify vulnerabilities in your IT infrastructure, applications, and networks. Our assessments include penetration testing, vulnerability scanning, security configuration reviews, and risk analysis. We deliver detailed reports with prioritized recommendations for improving your security posture. Our approach helps organizations understand their security risks and implement effective controls to protect against cyber threats.",
        icon: "fas fa-user-shield",
        category: "security",
        features: [
            "Penetration Testing",
            "Vulnerability Assessment",
            "Security Configuration Review",
            "Risk Analysis & Reporting",
            "Application Security Testing",
            "Network Security Assessment",
            "Remediation Planning",
            "Security Awareness Training"
        ]
    },
    {
        id: 10,
        title: "Network Security",
        description: "Protect your network infrastructure from threats and unauthorized access with advanced security measures.",
        longDescription: "Our network security services secure your network infrastructure against internal and external threats. We design and implement firewall configurations, intrusion detection/prevention systems, VPN solutions, network segmentation, and secure remote access. We monitor network traffic for suspicious activities and implement security controls to prevent unauthorized access. Our network security solutions ensure the confidentiality, integrity, and availability of your network resources.",
        icon: "fas fa-network-wired",
        category: "security",
        features: [
            "Firewall Configuration & Management",
            "Intrusion Detection/Prevention",
            "VPN & Secure Remote Access",
            "Network Segmentation",
            "Network Traffic Monitoring",
            "DDoS Protection",
            "Wireless Network Security",
            "Network Access Control"
        ]
    },
    {
        id: 11,
        title: "Data Protection & Backup",
        description: "Secure data backup solutions and disaster recovery planning to protect your critical business data.",
        longDescription: "We implement comprehensive data protection strategies including backup solutions, disaster recovery planning, and data archiving. Our services ensure your critical business data is protected against loss, corruption, and ransomware attacks. We design backup architectures, implement automated backup processes, test recovery procedures, and maintain disaster recovery documentation. Our solutions provide peace of mind that your data can be recovered quickly in case of incidents.",
        icon: "fas fa-database",
        category: "security",
        features: [
            "Backup Strategy Design",
            "Automated Backup Implementation",
            "Disaster Recovery Planning",
            "Data Archiving Solutions",
            "Backup Testing & Validation",
            "Ransomware Protection",
            "Compliance Data Retention",
            "Recovery Time Objective Planning"
        ]
    },
    {
        id: 12,
        title: "IT Consulting",
        description: "Expert guidance on technology strategy, digital transformation, and IT infrastructure planning.",
        longDescription: "Our IT consulting services provide strategic guidance to help businesses leverage technology for competitive advantage. We assess your current technology landscape, identify opportunities for improvement, develop technology roadmaps, and provide implementation guidance. Our consultants have deep expertise across multiple technology domains and industry verticals. We help organizations make informed technology decisions, optimize IT investments, and align technology initiatives with business objectives.",
        icon: "fas fa-lightbulb",
        category: "consulting",
        features: [
            "Technology Strategy Development",
            "IT Infrastructure Assessment",
            "Digital Transformation Planning",
            "Vendor Selection & Management",
            "IT Budget Planning",
            "Technology Roadmapping",
            "IT Governance Framework",
            "IT Performance Optimization"
        ]
    }
];

// Function to load services with clean layout
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    if (!servicesGrid) return;
    
    // Clear loading message
    servicesGrid.innerHTML = '';
    
    // Create service cards with clean layout
    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.setAttribute('data-category', service.category);
        serviceCard.setAttribute('data-id', service.id);
        
        // Create features list HTML
        const featuresList = service.features ? 
            `<div class="service-features-container">
                <h4>Key Features:</h4>
                <ul class="service-features">
                    ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
            </div>` : '';
        
        serviceCard.innerHTML = `
            <div class="service-card-content">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <div class="service-text-container">
                    <p class="service-short-desc">${service.description}</p>
                    <div class="service-full-desc" style="display: none;">
                        <p>${service.longDescription}</p>
                        ${featuresList}
                    </div>
                </div>
                <div class="service-actions">
                    <button class="btn-read-more">
                        <span class="btn-text">Read More</span>
                        <i class="fas fa-chevron-down btn-icon"></i>
                    </button>
                    <button class="btn-read-less" style="display: none;">
                        <span class="btn-text">Show Less</span>
                        <i class="fas fa-chevron-up btn-icon"></i>
                    </button>
                </div>
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
        
        // Add click event to Read More button
        const readMoreBtn = serviceCard.querySelector('.btn-read-more');
        const readLessBtn = serviceCard.querySelector('.btn-read-less');
        const shortDesc = serviceCard.querySelector('.service-short-desc');
        const fullDesc = serviceCard.querySelector('.service-full-desc');
        
        readMoreBtn.addEventListener('click', () => {
            shortDesc.style.display = 'none';
            fullDesc.style.display = 'block';
            readMoreBtn.style.display = 'none';
            readLessBtn.style.display = 'flex';
            serviceCard.classList.add('expanded');
        });
        
        readLessBtn.addEventListener('click', () => {
            shortDesc.style.display = 'block';
            fullDesc.style.display = 'none';
            readMoreBtn.style.display = 'flex';
            readLessBtn.style.display = 'none';
            serviceCard.classList.remove('expanded');
        });
    });
    
    // Add filter functionality
    setupServiceFilters();
}

// Function to setup service filters
function setupServiceFilters() {
    const filterButtons = document.querySelectorAll('.category-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            filterServices(category);
        });
    });
}

// Function to filter services
function filterServices(category) {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Load services when DOM is ready
document.addEventListener('DOMContentLoaded', loadServices);