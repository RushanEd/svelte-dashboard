const sample_mails = [
    {
        name: "John Doe",
        subject: "Budget Review",
        ago: new Date("2024-09-14T14:30:00"),
        "content": `<p>Hey team,</p>
<p>I'm excited to officially kick off our new project! This Wednesday at 10 AM, we'll gather to discuss the project's goals, timeline, and individual roles.</p>
<p><strong>Project Goals</strong></p>
<p>Our primary objective is to <strong>[state the primary goal]</strong>. This will involve <strong>[list of key tasks or deliverables]</strong>. By achieving this goal, we aim to <strong>[explain the impact or benefit]</strong>.</p>
<p><strong>Project Timeline</strong></p>
<p>To ensure we stay on track, we've established the following timeline:</p>
<ul>
<li><strong>Week 1:</strong> [Task 1, Task 2]</li>
<li><strong>Week 2:</strong> [Task 3, Task 4]</li>
<li><strong>Week 3:</strong> [Milestone 1]</li>
<li><strong>Week 4:</strong> [Task 5, Task 6]</li>
<li><strong>Week 5:</strong> [Milestone 2]</li>
<li><strong>Week 6:</strong> [Final Deliverable]</li>
</ul>
<p>Please review this timeline and let me know if you have any concerns or suggestions.</p>
<p><strong>Team Roles</strong></p>
<p>To streamline our efforts, we've assigned the following roles:</p>
<ul>
<li>[Team Member 1]: [Role and Responsibilities]</li>
<li>[Team Member 2]: [Role and Responsibilities]</li>
<li>[Team Member 3]: [Role and Responsibilities]</li>
</ul>
<p>I encourage open communication and collaboration throughout the project. If you have any questions or need clarification on your role, please don't hesitate to ask.</p>
<p><strong>Preparing for the Meeting</strong></p>
<p>To make the most of our time together, please come prepared with any questions or suggestions you may have. Your input is valuable and will help us shape the project's direction.</p>
<p>I'm confident that with your dedication and hard work, we can make this project a resounding success. Let's work together to achieve our goals!</p>`,
        labels: [
            { name: "finance", style: "label-important" },
            { name: "review", style: "label-outline" }
        ]
    },
    {
        name: "Marketing Team",
        subject: "New Campaign Strategy",
        ago: new Date("2024-08-15T11:00:00"),
        content: "<p><strong>Join us for a brainstorming session</strong> on our new campaign strategy.</p><p>Bring your ideas and creative thinking to the table as we develop a compelling marketing campaign to reach our target audience.</p><p>We'll discuss key messaging, target demographics, and channel strategies.</p><p>Let's work together to create a campaign that drives engagement and results!</p>",
        labels: [
            { name: "meeting", style: "label-default" },
            { name: "brainstorming", style: "label-primary" },
            { name: "campaign", style: "label-outline" }
        ]
    },
    {
        name: "Sarah Lee",
        subject: "Monthly Report Due",
        ago: new Date("2024-06-23T10:15:00"),
        content: `<p>This is a friendly reminder that the monthly report is due by the end of the week.</p>
<p>To ensure a comprehensive review of your performance, please make sure your report includes:</p>
<ul>
<li>A detailed analysis of key performance indicators (KPIs)</li>
<li>A summary of your significant achievements</li>
<li>A discussion of any challenges or obstacles you faced</li>
</ul>
<p>Please submit your completed report to [email protected] by Friday.</p>
<p>If you have any questions or require further assistance, please don't hesitate to reach out to me.</p>`,
        labels: [
            { name: "report", style: "label-outline" },
            { name: "reminder", style: "label-primary" },
            { name: "deadline", style: "label-important" }
        ]
    },
    {
        name: "IT Support",
        subject: "System Maintenance Notice",
        ago: new Date("2023-11-27T05:00:00"),
        content: `<p>Please be informed that system maintenance is scheduled to take place this Friday from 12 AM to 4 AM.</p>
<p>During this maintenance window, you may encounter temporary service disruptions, such as:</p>
<ul>
<li>Slow response times</li>
<li>Difficulty accessing certain features or services</li>
<li>Complete system outages</li>
</ul>
<p>We apologize for any inconvenience this may cause and appreciate your patience during this time.</p>
<p>To minimize disruption to your workflow, we recommend saving any important work before the maintenance window begins.</p>
<p>If you have any questions or concerns regarding the maintenance or experience any issues during this time, please contact the IT help desk for assistance.</p>`,
        labels: [
            { name: "alert", style: "label-important" },
            { name: "maintenance", style: "label-primary" },
            { name: "system", style: "label-default" }
        ]
    },
    {
        name: "Client Services",
        subject: "Follow-Up on Project X",
        ago: new Date("2023-09-01T09:30:00"),
        content: "<p>Hi,</p><p>we hope this email finds you well.</p><p>We're reaching out to discuss the next steps for <strong>Project X</strong>.</p><p>We're eager to continue our collaboration and ensure the project's successful completion.</p><p>Please let us know your availability for a follow-up call or meeting to discuss the project timeline, deliverables, and any potential challenges.</p><p>We look forward to hearing from you soon.</p>",
        labels: [
            { name: "client", style: "label-outline" },
            { name: "follow-up", style: "label-primary" },
            { name: "project", style: "label-default" }
        ]
    },
    {
        name: "Rachel Adams",
        subject: "Team Lunch This Friday",
        ago: new Date("2024-07-15T12:00:00"),
        content: "<p>Team,</p><p>let's take a break and enjoy a team lunch this Friday at 12 PM at the rooftop cafe!</p><p>It's a great opportunity to relax, socialize, and recharge.</p><p>We'll be ordering lunch, so please let me know if you have any dietary restrictions.</p><p>Looking forward to seeing you there!</p>",
        labels: [
            { name: "social", style: "label-default" },
            { name: "team", style: "label-primary" },
            { name: "reminder", style: "label-outline" },
            { name: "lunch", style: "label-important" }
        ]
    },
    {
        name: "HR Department",
        subject: "Annual Review Process",
        ago: new Date("2022-12-18T08:45:00"),
        content: "<p>The annual review process has officially begun.</p><p>To facilitate a comprehensive review, please complete your self-evaluation form by [deadline date].</p><p>This form allows you to reflect on your accomplishments, challenges, and goals for the upcoming year.</p><p>Your manager will use this information, along with your performance metrics, to provide you with valuable feedback and set clear objectives for the next year.</p><p>If you have any questions or require assistance, please don't hesitate to contact the HR department.</p>",
        labels: [
            { name: "hr", style: "label-important" },
            { name: "review", style: "label-outline" },
            { name: "deadline", style: "label-primary" },
            { name: "self-evaluation", style: "label-default" }
        ]
    },
    {
        name: "Finance Team",
        subject: "Expense Reports",
        ago: new Date("2024-04-23T13:00:00"),
        content: "<p>Please submit your expense reports for Q3 by the end of this week.</p><p>To ensure timely processing, please ensure that your expense reports are complete, accurate, and include all necessary documentation, such as receipts and invoices.</p><p>If you have any questions or require assistance with the expense reporting process, please contact the finance department.</p>",
        labels: [
            { name: "finance", style: "label-primary" },
            { name: "report", style: "label-outline" },
            { name: "deadline", style: "label-important" }
        ]
    },
    {
        name: "Product Team",
        subject: "Feature Rollout Update",
        ago: new Date("2023-08-27T15:30:00"),
        content: "<p>**Exciting news!**</p><p>New features will be rolled out this month.</p><p>These enhancements are designed to improve your user experience and streamline your workflow.</p><p>Stay tuned for a detailed announcement with the specific release date and a comprehensive overview of the new features.</p><p>We encourage you to explore these new features and provide feedback to help us continue to improve our product.</p>",
        labels: [
            { name: "product", style: "label-primary" },
            { name: "update", style: "label-default" },
            { name: "feature", style: "label-outline" }
        ]
    },
]
export default sample_mails;
