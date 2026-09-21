---
name: pm-launch-checklist
description: Pre-launch verification checklist for product releases. Covers product readiness, technical, marketing, support, legal, and rollback planning. Use when user says "/pm-launch-checklist", "launch checklist", "ready to ship?", "go/no-go", or is preparing for a release.
---

# /pm-launch-checklist — Pre-Launch Verification

Structured go/no-go checklist before any product launch.

## Workflow

### Step 1: Launch Context

Ask:
- What are you launching? (feature, product, update)
- Target launch date?
- Audience size? (% rollout, beta, full)

### Step 2: Generate Checklist

Adapt based on launch scope. Full checklist:

**🎯 Product Readiness**
- [ ] Core user flows tested end-to-end
- [ ] Edge cases documented and handled
- [ ] Empty states and error states designed
- [ ] Mobile/responsive testing done
- [ ] Accessibility basics (keyboard nav, screen reader, contrast)
- [ ] Performance acceptable (page load < 3s, no memory leaks)

**🔧 Technical**
- [ ] Feature flag in place for kill switch
- [ ] Monitoring/alerts configured
- [ ] Database migrations tested
- [ ] API rate limits appropriate
- [ ] Rollback plan documented and tested
- [ ] Load testing done (if applicable)

**📣 Marketing & Distribution**
- [ ] Launch copy written (landing page, email, social)
- [ ] Screenshots/demo video ready
- [ ] Distribution channels identified
- [ ] Influencer/community seeding planned
- [ ] Analytics events tracking all key actions

**📞 Support & Ops**
- [ ] Support team briefed on new feature
- [ ] FAQ/help docs updated
- [ ] Known limitations documented
- [ ] Feedback collection mechanism in place

**⚖️ Legal & Compliance**
- [ ] Terms of service updated (if needed)
- [ ] Privacy policy covers new data collection
- [ ] GDPR/CCPA compliance checked
- [ ] Licensing for any new dependencies

**🔄 Rollback Plan**
- [ ] What triggers a rollback?
- [ ] How fast can we rollback?
- [ ] Who makes the rollback call?
- [ ] Communication plan if rollback needed

### Step 3: Score

Count completed items:
- **Green (>80%)**: Go for launch
- **Yellow (60-80%)**: Launch with documented risks
- **Red (<60%)**: Delay — here's what to fix first

### Step 4: Decision

Present: "Launch readiness: [score]%. Recommendation: [Go/Hold/Delay]"

If Go → "When should we schedule it?"
If Hold → "Here are the 3 items to close before launch."
If Delay → "Estimated time to ready: [X days]. Here's the critical path."

Save checklist to `hq/launches/YYYY-MM-DD-{slug}-checklist.md`
