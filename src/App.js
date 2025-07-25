import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function StartPage() {
  return (
    <div className="guide-container">
      <main className="guide-main">
        <h2>Classbuddy Lab</h2>
        <p className="guide-intro">
          Ready to see how AI can reshape learning? In just 5 minutes, you'll test an AI assistant, create your own agent, and discover a marketplace of possibilities — no signup, no stress, all innovation.
        </p>
        <div className="guide-steps">
          <div className="guide-step">
            <div className="guide-step-num">01</div>
            <div className="guide-step-title">Test<br />Classbuddy</div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">02</div>
            <div className="guide-step-title">Create<br />Agent</div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">03</div>
            <div className="guide-step-title">Create Agentic<br />AI Agent</div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">04</div>
            <div className="guide-step-title">Explore Marketplace</div>
          </div>
        </div>
        <div className="guide-footer" style={{ fontSize: '1.15rem', fontWeight: 500 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span className="guide-benefit-icon" role="img" aria-label="Check" style={{ color: '#22c55e' }}>✅</span>No signup required</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span className="guide-benefit-icon" role="img" aria-label="Check" style={{ color: '#22c55e' }}>✅</span>No experience required</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span className="guide-benefit-icon" role="img" aria-label="Check" style={{ color: '#22c55e' }}>✅</span>Self-guided</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '24px 0' }}>
          <Link to="/test" className="guide-start-btn" style={{ background: '#6323B9', color: 'white', border: 'none' }}>Launch Your AI Lab <span style={{ fontSize: '1.2em', marginLeft: 8 }}>&#9654;</span></Link>
        </div>
      </main>
    </div>
  );
}

function TestPage() {
  return (
    <div style={{ minHeight: '100vh', padding: '0', margin: '0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 0 0 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: 12 }}>Step 1: Test Classbuddy</h1>
        <div style={{ fontSize: '1.25rem', color: '#444', marginBottom: 36, textAlign: 'left', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          <div style={{ marginBottom: 18, textAlign: 'center' }}>
            Now it’s your turn to interact with the Virtual TA and see how it responds across different areas of student life.
          </div>
          <div style={{ fontWeight: 800, fontSize: '2rem', marginBottom: 14, color: '#444', letterSpacing: 0.2, textAlign: 'center' }}>Try It Out</div>
          <div style={{ marginBottom: 10, textAlign: 'center' }}>
            Ask <b>one question</b> from each of the <b>categories</b> below.
          </div>
          <div style={{ marginBottom: 10, textAlign: 'center' }}>
            <span style={{ fontWeight: 500 }}>You can either:</span>
            <ul style={{ margin: '8px 0 8px 24px', padding: 0, display: 'inline-block', textAlign: 'left' }}>
              <li><b>Copy and paste</b> a sample question from the list below, or</li>
              <li><b>Come up with your own</b> question related to that category.</li>
            </ul>
          </div>
          <div style={{ marginBottom: 0, textAlign: 'center' }}>
            <span style={{ fontWeight: 500 }}>Take a moment to explore how the <b>Virtual TA</b> handles different types of student inquiries!</span>
          </div>
          <div style={{ marginBottom: 0, textAlign: 'center' }}>
            <span style={{ fontWeight: 500, fontSize: '1.5rem' }}>Select the Honors Chemistry Course!</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <img src="/canvas-home.png" alt="ClassBuddy in Canvas" style={{ width: '90%', maxWidth: 900, borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <img src="/Screenshot 2025-07-16 at 4.52.36 PM.png" alt="ClassBuddy in Canvas" style={{ width: '90%', maxWidth: 900, borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', marginTop: 0 }}>
        {/* Assignment Help Category Card */}
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '32px 32px 24px 32px', marginBottom: 32, borderTop: '6px solid #f87171' }}>
          <div style={{ color: '#f87171', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>ASSIGNMENT</div>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>A. Assignment Help</div>
          <div style={{ color: '#444', marginBottom: 18 }}>Ask about something you are stuck on in an assignment.</div>
          <div style={{ color: '#888', fontSize: '1rem', marginBottom: 8 }}>Sample prompts:</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you create me a timeline to help me with this project due in 3 days?"
              <CopyPrompt text="Can you create me a timeline to help me with this project due in 3 days?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you explain this to me in sports terms?"
              <CopyPrompt text="Can you explain this to me in sports terms?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you explain how to complete this assignment in simple terms?"
              <CopyPrompt text="Can you explain how to complete this assignment in simple terms?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "What formula or method should I use to complete this question?"
              <CopyPrompt text="What formula or method should I use to complete this question?" />
            </div>
          </div>
          <div style={{ color: '#888', fontSize: '0.98rem', marginTop: 18 }}>
            <b>Look for:</b> Guidance, structure, or coaching questions—not a finished answer.
          </div>
        </div>
        {/* Course Content Questions Category Card */}
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '32px 32px 24px 32px', marginBottom: 32, borderTop: '6px solid #60a5fa' }}>
          <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>COURSE CONTENT</div>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>B. Course Content Questions</div>
          <div style={{ color: '#444', marginBottom: 18 }}>Ask about the course material, syllabus, or what you missed.</div>
          <div style={{ color: '#888', fontSize: '1rem', marginBottom: 8 }}>Sample prompts:</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Has my teacher announced any extra credit opportunities recently?"
              <CopyPrompt text="Has my teacher announced any extra credit opportunities recently?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you summarize today’s key points in a few bullet points?"
              <CopyPrompt text="Can you summarize today’s key points in a few bullet points?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "What are the key takeaways from the week 3 reading?"
              <CopyPrompt text="What are the key takeaways from the week 3 reading?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "I was absent on 9/7, what did I miss?"
              <CopyPrompt text="I was absent on 9/7, what did I miss?" />
            </div>
          </div>
          <div style={{ color: '#888', fontSize: '0.98rem', marginTop: 18 }}>
            <b>Look for:</b> Questions about course logistics, content, or missed material.
          </div>
        </div>
        {/* Quiz Help Category Card */}
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '32px 32px 24px 32px', marginBottom: 32, borderTop: '6px solid #34d399' }}>
          <div style={{ color: '#34d399', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>QUIZ HELP</div>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>C. Quiz Help</div>
          <div style={{ color: '#444', marginBottom: 18 }}>Ask for help preparing for or reviewing a quiz.</div>
          <div style={{ color: '#888', fontSize: '1rem', marginBottom: 8 }}>Sample prompts:</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Make me a checklist of what I should understand before taking the quiz."
              <CopyPrompt text="Make me a checklist of what I should understand before taking the quiz." />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you help me reflect on what I got wrong and why?"
              <CopyPrompt text="Can you help me reflect on what I got wrong and why?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you give me a list of formulas or terms I need to memorize?"
              <CopyPrompt text="Can you give me a list of formulas or terms I need to memorize?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you generate a study guide based on this week’s content?"
              <CopyPrompt text="Can you generate a study guide based on this week’s content?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "What are some high-priority topics that usually show up on quizzes?"
              <CopyPrompt text="What are some high-priority topics that usually show up on quizzes?" />
            </div>
          </div>
          <div style={{ color: '#888', fontSize: '0.98rem', marginTop: 18 }}>
            <b>Look for:</b> Study strategies, review, and preparation—not direct answers.
          </div>
        </div>
        {/* Guardrails Category Card */}
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '32px 32px 24px 32px', marginBottom: 32, borderTop: '6px solid #fbbf24' }}>
          <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>GUARDRAILS</div>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>D. Guardrails (Things Classbuddy Won't Do)</div>
          <div style={{ color: '#444', marginBottom: 18 }}>Classbuddy will not do your work for you or provide direct answers.</div>
          <div style={{ color: '#888', fontSize: '1rem', marginBottom: 8 }}>Sample prompts:</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you just give me the correct answers for my quiz?"
              <CopyPrompt text="Can you just give me the correct answers for my quiz?" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "Can you complete this assignment for me and give me the final result?"
              <CopyPrompt text="Can you complete this assignment for me and give me the final result?" />
            </div>
          </div>
          <div style={{ color: '#888', fontSize: '0.98rem', marginTop: 18 }}>
            <b>Note:</b> Classbuddy is here to help you learn, not to do your work for you.
          </div>
        </div>
        {/* Lecture/Video Help Category Card */}
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '32px 32px 24px 32px', marginBottom: 32, borderTop: '6px solid #a78bfa' }}>
          <div style={{ color: '#a78bfa', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>LECTURE/VIDEO HELP</div>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>E. Lecture/Video Help</div>
          <div style={{ color: '#444', marginBottom: 18 }}>Ask about specific parts of a lecture or video.</div>
          <div style={{ color: '#888', fontSize: '1rem', marginBottom: 8 }}>Sample prompts:</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "give me the video on balancing equations"
              <CopyPrompt text="give me the video on balancing equations" />
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '16px 18px', fontStyle: 'italic', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              "how did he balance h2 o2 in the video"
              <CopyPrompt text="how did he balance h2 o2 in the video" />
            </div>
          </div>
          <div style={{ color: '#888', fontSize: '0.98rem', marginTop: 18 }}>
            <b>Look for:</b> Questions about specific explanations, timestamps, or clarifications.
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', marginBottom: 12, textAlign: 'center', fontSize: '1.18rem', color: '#6323B9', fontWeight: 700 }}>
        <b>Great job!</b><br />
        You just saw how students get real-time support to stay productive — while your team saves time and energy.
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', marginBottom: 24, textAlign: 'center', fontSize: '1.08rem', color: '#140726', fontWeight: 500 }}>
        <b>Next up:</b> Let's build your own agent and see the magic from the other side.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '40px 0 32px 0' }}>
        <Link to="/" className="guide-nav-btn">Back: Start</Link>
        <Link to="/create-agent" className="guide-nav-btn guide-next-btn">Next: Create Agent</Link>
      </div>
    </div>
  );
}

function CreateAgenticAIPage() {
  return (
    <div style={{ minHeight: '100vh', padding: 0, margin: 0 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 0 0 0', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 700, color: '#6323B9', marginBottom: 8, fontSize: '2.5rem' }}>Create an IT Help Desk Agent to Streamline Support and Ticket Creation</h1>
        <div style={{ fontSize: '1.25rem', color: '#140726', marginBottom: 32 }}>
          Help users quickly create and track IT support tickets, reducing wait times and improving the help desk experience for everyone.
        </div>
        {/* Navigation video for all steps */}
        <div className="navigate-card">
          <div style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 8 }}>Navigate</div>
          <div style={{ color: '#6323B9', fontWeight: 600, fontSize: '1.2rem', marginBottom: 24, textAlign: 'center' }}>
            Back → Agent Marketplace → My Agents → Create Agent
          </div>
          <video src="/videoPart1.mov" style={{ width: 700, maxWidth: '100%', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} autoPlay loop muted controls playsInline />
        </div>
        {/* Read-only form for copying values to create the agent */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 60 }}>
          <form style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '40px 40px 32px 40px', width: 700, maxWidth: '100%' }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontWeight: 700, fontSize: '2.7rem', marginBottom: 12 }}>Create an Agentic AI Agent</div>
              <div style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: 24, lineHeight: 2, textAlign: 'left' }}>
                <div><b>Step 1:</b> Copy the agent name below and paste it into the "Name this Agent" field.</div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, marginTop: 12 }}>
                  <input type="text" readOnly value="IT Help Desk Agent" placeholder="" style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                  <CopyButton value="IT Help Desk Agent" />
                </div>

                <div style={{ marginTop: 24 }}><b>Step 2:</b> Copy the description below and paste it into the "Description" field.</div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, marginTop: 12 }}>
                  <input type="text" readOnly value="This Agent Helps Students with IT Help Desk Requests." placeholder="" style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                  <CopyButton value="This Agent Helps Students with IT Help Desk Requests." />
                </div>

                <div style={{ marginTop: 24 }}><b>Step 3:</b> Copy the instructions below and paste them into the "Instructions" field.</div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, marginTop: 12 }}>
                  <textarea readOnly value={`You are a helpful, kind assistant who helps create a ticket(incident) in ServiceNow. 
If the user says, "Could you please create a ticket on service now?", you should ask for a description and generate a short description for this ticket. Confirm the generated short description and description with the user. After the user's confirmation, call the new_tool action and pass these two inputs.
If the user provides their own description, use it exactly as given and generate a short description. Confirm the generated short description and description with the user. After user's confirmation, call the new_tool action call the n8n servicenow action and pass these two inputs.
After calling the new_tool action, you should receive the ticket link as well as the ticket(incident) number. Provide the successful message, ticket link, and ticket number to the user.
If you do not receive the details about the ticket link and incident number, this means an error.`} placeholder="" style={{ width: '100%', minHeight: 80, padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb', resize: 'vertical' }} />
                  <CopyButton value={`You are a helpful, kind assistant who helps create a ticket(incident) in ServiceNow.
If the user says, "Could you please create a ticket on service now?", you should ask for a description and generate a short description for this ticket. Confirm the generated short description and description with the user. After the user's confirmation, call the new_tool action and pass these two inputs.
If the user provides their own description, use it exactly as given and generate a short description. Confirm the generated short description and description with the user. After user's confirmation, call the new_tool action call the n8n servicenow action and pass these two inputs.
After calling the new_tool action, you should receive the ticket link as well as the ticket(incident) number. Provide the successful message, ticket link, and ticket number to the user.
If you do not receive the details about the ticket link and incident number, this means an error.`} />
                </div>

                <div style={{ marginTop: 24 }}><b>Step 4:</b> Copy the conversation starter below and paste it into the "Conversation starters" field.</div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, marginTop: 12 }}>
                  <input type="text" readOnly value="I need help with my computer." style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                  <CopyButton value="I need help with my computer." />
                </div>

                <div style={{ marginTop: 24 }}><b>Step 5:</b> Set the category to "Information Technology Service" (should be pre-selected).</div>
                <div style={{ marginBottom: 24, marginTop: 12 }}>
                  <select disabled style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }}>
                    <option>Information Technology Service</option>
                  </select>
                </div>

                <div style={{ marginTop: 24 }}><b>Step 6:</b> Set Access Permissions</div>
                <div style={{ fontSize: '0.98rem', color: '#94a3b8', marginLeft: 18, marginTop: 4, marginBottom: 24 }}>
                  To control who can access this agent:<br />
                  1. Scroll down to the <b>Access Permissions</b> section<br />
                  2. You can then:<br />
                  • Choose <b>Only Me</b> to keep the agent private<br />
                  • Or choose <b>Groups</b> to share the agent with selected teams<br /><br />
                  To share with groups:<br />
                  • Select one or more from the <b>Group Information</b> table<br />
                  • Click <b>Attach</b> to add them<br />
                  • They'll show up in the <b>Attached Group List</b><br /><br />
                  You can also detach groups later using <b>Remove Attached Group</b>.<br /><br />
                  This gives you control over visibility and access within your organization.
                </div>

                <div style={{ marginTop: 24 }}><b>Step 7:</b> Click <b>Continue</b> to configure your agent's action (this opens the <i>Add Action</i> modal).</div>

                <div style={{ marginTop: 24 }}><b>Step 8:</b> Create an Action</div>
                <div style={{ fontSize: '0.98rem', color: '#94a3b8', marginLeft: 18, marginTop: 4, marginBottom: 12 }}>
                  • Click <b>Add Action</b> to open the <i>Add Action</i> modal.<br />
                  • Provide a name for your action (e.g., <code>create_ticket</code>)<br />
                  • Click <b>Format JSON</b> to validate<br />
                  • Click <b>Create</b> to create the action
                </div>

                <div style={{ marginTop: 24 }}><b>Step 9:</b> Copy the action name below and paste it into the action name field in the modal.</div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, marginTop: 12 }}>
                  <input type="text" readOnly value="ServiceNow Ticket Creation" placeholder="" style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                  <CopyButton value="ServiceNow Ticket Creation" />
                </div>

                <div style={{ marginTop: 24 }}><b>Step 10:</b> Copy the OpenAPI JSON configuration below and paste it into the schema field in the modal.</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 24, marginTop: 12 }}>
                  <textarea readOnly value={`{
  "openapi": "3.1.0",
  "info": {
    "title": "ServiceNow Webhook",
    "description": "Processes employee-related requests by forwarding to the ServiceNow webhook.",
    "version": "v1.0.0"
  },
  "servers": [
    {
      "url": "https://royalcyberinc.app.n8n.cloud/webhook"
    }
  ],
  "paths": {
    "/ServiceNow": {
      "post": {
        "description": "Receive chat input to trigger ServiceNow updates",
        "operationId": "ServiceNow",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "chatInput": {
                    "type": "string",
                    "description": "The user request or input to be processed"
                  }
                },
                "required": ["chatInput"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "ServiceNow webhook executed successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Request forwarded to ServiceNow"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {}
}`} placeholder="" style={{ width: '100%', minHeight: 200, padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1rem', background: '#f9fafb', resize: 'vertical', fontFamily: 'monospace' }} />
                  <CopyButton value={`{
  "openapi": "3.1.0",
  "info": {
    "title": "ServiceNow Webhook",
    "description": "Processes employee-related requests by forwarding to the ServiceNow webhook.",
    "version": "v1.0.0"
  },
  "servers": [
    {
      "url": "https://royalcyberinc.app.n8n.cloud/webhook"
    }
  ],
  "paths": {
    "/ServiceNow": {
      "post": {
        "description": "Receive chat input to trigger ServiceNow updates",
        "operationId": "ServiceNow",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "chatInput": {
                    "type": "string",
                    "description": "The user request or input to be processed"
                  }
                },
                "required": ["chatInput"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "ServiceNow webhook executed successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Request forwarded to ServiceNow"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {}
}`} />
                </div>
                <div style={{ marginBottom: 24, textAlign: 'center' }}>
                  <div style={{ color: '#64748b', fontSize: '1rem', marginBottom: 12 }}>In this JSON it calling n8n workflow</div>
                  <img src="/servicenow-agent.png" alt="n8n workflow execution" style={{ width: '100%', maxWidth: 600, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
                </div>

                <div style={{ marginTop: 24 }}><b>Step 11:</b> Go back to the agent creation form and click <b>Save</b> to finalize your agent.</div>

                <div style={{ marginTop: 24 }}><b>Step 12:</b> Test your Agent</div>
                <div style={{ fontSize: '0.98rem', color: '#94a3b8', marginLeft: 18, marginTop: 4 }}>
                  Once your agent is saved, you'll be redirected to the <b>My Agents</b> page.<br /><br />
                  To test the agent:<br />
                  1. Click the <b>three-dot action menu</b> (⋯) next to your newly created agent.<br />
                  2. Select <b>Chat with Agent</b> from the dropdown menu.<br />
                  3. You'll be taken to a chat screen where you can begin interacting with the agent.<br />
                  4. Try using a sample prompt like:<br />
                  <span style={{ marginLeft: 12, display: 'block', fontSize: '1.05rem', color: '#334155' }}>
                    "Hi, can you create a ticket for my printer issue?"
                  </span>
                  5. Confirm the agent responds appropriately and performs the correct action (e.g., ticket creation).
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', marginBottom: 12, textAlign: 'center', fontSize: '1.18rem', color: '#6323B9', fontWeight: 600 }}>
        <b>Done!</b><br />
        You've just created an agent designed to simplify the support experience and reduce confusion for everyone it serves.<br />
        <span style={{ color: '#140726', fontWeight: 500, fontSize: '1.08rem', display: 'block', marginTop: 8 }}>
          <b>Next up:</b> You're ready to explore the diverse range of agents in the marketplace and see what else is possible.
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '40px 0 32px 0' }}>
        <Link to="/create-agent" className="guide-nav-btn">Back: Create Agent</Link>
        <Link to="/explore-marketplace" className="guide-nav-btn guide-next-btn">Next: Explore Marketplace</Link>
      </div>
    </div>
  );
}

function CreateAgentPage() {
  return (
    <div style={{ minHeight: '100vh', padding: 0, margin: 0 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 0 0 0', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 700, color: '#6323B9', marginBottom: 8, fontSize: '2.5rem' }}>Create a Course Discovery Agent to Boost Readiness and Reduce Workload</h1>
        <div style={{ fontSize: '1.25rem', color: '#140726', marginBottom: 32 }}>
          Help students explore the courses available to them, understand their options, and choose the right path with confidence and ease.
        </div>
        {/* Navigation video for all steps */}
        <div className="navigate-card">
          <div style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 8 }}>Navigate</div>
          <div style={{ color: '#6323B9', fontWeight: 600, fontSize: '1.2rem', marginBottom: 24, textAlign: 'center' }}>
            Back → Agent Marketplace → My Agents → Create Agent
          </div>
          <video src="/videoPart1.mov" style={{ width: 700, maxWidth: '100%', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} autoPlay loop muted controls playsInline />
        </div>
        {/* Read-only form for copying values to create the agent */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 60 }}>
          <form style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '40px 40px 32px 40px', width: 700, maxWidth: '100%' }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontWeight: 700, fontSize: '2.7rem', marginBottom: 12 }}>Create an Agentic</div>
              <div style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: 24, lineHeight: 2, textAlign: 'left' }}>
                <div><b>Step 1:</b> Copy all the fields provided below, one at a time.</div>
                <div style={{ marginTop: 16 }}>
                  <b>Step 2:</b> Paste each field into its respective place in the agent creation form.
                  <div style={{ fontSize: '0.98rem', color: '#94a3b8', marginLeft: 18, marginTop: 4 }}>
                    This ensures your agent has the correct name, purpose, behavior, and prompts.
                  </div>
                </div>
                <div style={{ marginTop: 16 }}><b>Step 3:</b> Upload the data files the agent will use. (available below)</div>
                <div style={{ marginTop: 16 }}><b>Step 4:</b> Review everything and click Save to finish setting up your agent.</div>
              </div>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>Name this Agent</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                <input type="text" readOnly value="Course Discovery Helper" placeholder="" style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                <CopyButton value="Course Discovery Helper" />
              </div>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>Description</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                <input type="text" readOnly value="Helps students explore courses by interest, requirement, credits & level. Demo data—confirm with your institution." placeholder="" style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                <CopyButton value="Helps students explore courses by interest, requirement, credits & level. Demo data—confirm with your institution." />
              </div>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>Instructions</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                <textarea readOnly value={`You are a course discovery assistant using the uploaded Sample Catalog dataset (demo).
When a student is unsure what to take, ask 2–3 quick questions: interests, requirement needs (writing, science, etc.), desired credit load, and whether they want beginner-friendly classes.
Match queries against these fields in the data: title, desc_short, interest_tags, gened_tags, credits_min/max, difficulty, prereq_flag, experience_tags, modality.
Return short suggestion lists (3–6 items). Use headings when helpful:
• Starter Picks (intro, low prereqs)
• Fulfills Requirement (matches gen-ed tag requested)
• Try Something Different (outside stated interest)
Each result: course_id – title (credits) + short summary. Mention difficulty or prereq note if flagged.
If the student asks for official degree applicability, current availability, or enrollment info: say this is demo data and advise checking the institution’s catalog or an academic advisor.
If the student asks for assignment, quiz, or lecture help: direct them to their ClassBuddy course assistant (not you).
Always append: Demo data—confirm with your institution.
Do not invent courses not present in the uploaded data.`} placeholder="" style={{ width: '100%', minHeight: 80, padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb', resize: 'vertical' }} />
                <CopyButton value={`You are a course discovery assistant using the uploaded Sample Catalog dataset (demo).
When a student is unsure what to take, ask 2–3 quick questions: interests, requirement needs (writing, science, etc.), desired credit load, and whether they want beginner-friendly classes.
Match queries against these fields in the data: title, desc_short, interest_tags, gened_tags, credits_min/max, difficulty, prereq_flag, experience_tags, modality.
Return short suggestion lists (3–6 items). Use headings when helpful:
• Starter Picks (intro, low prereqs)
• Fulfills Requirement (matches gen-ed tag requested)
• Try Something Different (outside stated interest)
Each result: course_id – title (credits) + short summary. Mention difficulty or prereq note if flagged.
If the student asks for official degree applicability, current availability, or enrollment info: say this is demo data and advise checking the institution’s catalog or an academic advisor.
If the student asks for assignment, quiz, or lecture help: direct them to their ClassBuddy course assistant (not you).
Always append: Demo data—confirm with your institution.
Do not invent courses not present in the uploaded data.`} />
              </div>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>Conversation starters</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text" readOnly value="I don’t know what to take—help me choose." style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                  <CopyButton value="I don’t know what to take—help me choose." />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text" readOnly value="I need a science class." style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                  <CopyButton value="I need a science class." />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text" readOnly value="Show beginner data or coding courses." style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                  <CopyButton value="Show beginner data or coding courses." />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text" readOnly value="I still need a writing requirement." style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }} />
                  <CopyButton value="I still need a writing requirement." />
                </div>
              </div>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>Category</div>
              <select disabled style={{ width: '100%', padding: '14px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1.1rem', background: '#f9fafb' }}>
                <option>academic affirs</option>
              </select>
              {/* Knowledge Base section */}
              <div style={{ fontWeight: 600, margin: '32px 0 6px 0' }}>Knowledge Base</div>
              <div style={{ color: '#888', fontSize: '1rem', marginBottom: 12 }}>Download and drag this file into the Knowledge Base section in the Lab.</div>
              <a href="/sample_catalog_meta.md" download style={{ display: 'block', width: '100%', padding: '32px 0', border: '2px dashed #a5b4fc', borderRadius: 12, background: '#f8fafc', textAlign: 'center', color: '#2563eb', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', marginBottom: 24, cursor: 'pointer' }}>
                📄 sample_catalog_meta.md<br />
                <span style={{ fontWeight: 400, color: '#64748b', fontSize: '1rem' }}>(Drag and drop this file into the Lab)</span>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', marginBottom: 12, textAlign: 'center', fontSize: '1.18rem', color: '#2563eb', fontWeight: 600 }}>
        <b>Done!</b><br />
        You've just created an agent designed to simplify the support experience and reduce confusion for everyone it serves.<br />
        <span style={{ color: '#334155', fontWeight: 500, fontSize: '1.08rem', display: 'block', marginTop: 8 }}>
          <b>Next up:</b> You're ready to explore the diverse range of agents in the marketplace and see what else is possible.
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '40px 0 32px 0' }}>
        <Link to="/test" className="guide-nav-btn">Back: Test ClassBuddy</Link>
        <Link to="/create-agentic-ai" className="guide-nav-btn guide-next-btn">Next: Create Agentic AI Agent</Link>
      </div>
    </div>
  );
}

function ExploreMarketplacePage() {
  return (
    <div style={{ minHeight: '100vh', padding: 0, margin: 0 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 0 0 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 18 }}>Explore the Agent Marketplace</h1>
        <div style={{ color: '#140726', fontSize: '1.15rem', marginBottom: 24 }}>
          The Agent Marketplace is where you can discover prebuilt agents that support students, staff, and faculty across campus.<br /><br />
          Each agent has a specific job — answering questions, helping with forms, or automating routine work.
        </div>
        {/* Navigation section */}
        <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '32px 32px 24px 32px', margin: '0 auto 32px auto', maxWidth: 600, textAlign: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 12 }}>Navigate to Marketplace</div>
          <video src="/videoPart2MarketPlace.mov" style={{ width: 700, maxWidth: '100%', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} autoPlay loop muted controls playsInline />
        </div>
        {/* Try out a trending agent section */}
        <div style={{ background: '#f1f5f9', borderRadius: 12, padding: '24px 32px', margin: '32px auto', maxWidth: 600, textAlign: 'center', color: '#334155', fontSize: '1.15rem', fontWeight: 500 }}>
          <div style={{ fontWeight: 700, fontSize: '1.8rem', marginBottom: 10 }}>Explore the Agent Marketplace</div>
          <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: 520 }}>
            Discover trending agents right from your dashboard—these are the most popular tools being used across campuses today and a great way to see what's making an impact.<br /><br />
            <img src="/agent dashboard ss.png" alt="Trending Agents Dashboard Screenshot" style={{ width: '70%', maxWidth: 340, borderRadius: 12, margin: '16px 0' }} /><br />
            <br />
            Click on any agent to see how it works and try it out.<br /><br />
            <b>Want to see more?</b><br />
            Scroll down and click "View All Agents" to open the full marketplace.<br />
            <img src="/Screenshot 2025-07-18 at 9.58.33 PM.png" alt="View All Agents Screenshot" style={{ width: '50%', maxWidth: 220, borderRadius: 12, margin: '16px 0' }} /><br />
            There, you can browse by category, search for specific needs, or get inspired by what others have created.
          </div>
        </div>
      </div>
      {/* Free Trial CTA Section */}
      <div style={{ background: 'linear-gradient(135deg, #6323b9 0%, #4c1d95 100%)', borderRadius: 16, padding: '40px 32px', margin: '40px auto', maxWidth: 600, textAlign: 'center', color: 'white', boxShadow: '0 4px 20px rgba(99, 35, 185, 0.3)' }}>
        <div style={{ fontWeight: 700, fontSize: '1.8rem', marginBottom: 12 }}>Ready to Get Started?</div>
        <div style={{ fontSize: '1.2rem', marginBottom: 24, opacity: 0.95 }}>
          Use ClassBuddy.ai free for up to 3 courses this Fall semester.
        </div>
        <a
          href="https://classbuddy.ai/exclusive-classbuddy-free-trial-fall/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#6323B9',
            padding: '16px 32px',
            borderRadius: 12,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.1rem',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          Sign Up for Test Drive
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '40px 0 32px 0' }}>
        <Link to="/create-agentic-ai" className="guide-nav-btn">Back: Create Agentic AI Agent</Link>
        <Link to="/" className="guide-nav-btn">Start Over</Link>
      </div>
    </div>
  );
}

function CopyPrompt({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <span style={{ marginLeft: 12, color: copied ? '#22c55e' : '#888', cursor: 'pointer', fontSize: '1.3rem' }} title={copied ? 'Copied!' : 'Copy'} onClick={handleCopy}>
      {copied ? '✔️' : '📋'}
    </span>
  );
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <button type="button" onClick={handleCopy} style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem', color: copied ? '#22c55e' : '#888', verticalAlign: 'middle' }} title={copied ? 'Copied!' : 'Copy'}>
      {copied ? '✔️' : '📋'}
    </button>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div style={{ backgroundColor: '#EDE7F5', minHeight: '100vh' }}>
      <ScrollToTop />
      <nav className="guide-nav">
        <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
          <img src="/classbuddy-white-logo.svg" alt="ClassBuddy" style={{ height: '32px', marginRight: '16px' }} />
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link to="/">Start</Link>
          <Link to="/test">Test</Link>
          <Link to="/create-agent">Create Agent</Link>
          <Link to="/create-agentic-ai">Create Agentic AI</Link>
          <Link to="/explore-marketplace">Marketplace</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/create-agent" element={<CreateAgentPage />} />
        <Route path="/create-agentic-ai" element={<CreateAgenticAIPage />} />
        <Route path="/explore-marketplace" element={<ExploreMarketplacePage />} />
      </Routes>
    </div>
  );
}

export default App;
