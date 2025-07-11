# co-supply-ai

# EcoSupplyAI

> **AI‑powered sustainable supply‑chain platform for retail**

EcoSupplyAI predicts perishable spoilage, optimises low‑carbon routing, and proves ethical sourcing with blockchain traceability – giving retailers like Walmart the tools to cut waste and emissions while boosting customer trust.

---

## 🌍 Why?

Sustainability is no longer optional. Retailers discard **\~30%** of fresh inventory and logistics account for a significant share of scope‑3 emissions. EcoSupplyAI unifies **AI forecasting**, **green logistics**, **IoT energy monitoring**, and **blockchain provenance** into a single open‑source toolkit that can be piloted in one store or scaled chain‑wide.

---

## ✨ Key Features

| Module                                  | What it does                                        | Tech                     | Impact                |
| --------------------------------------- | --------------------------------------------------- | ------------------------ | --------------------- |
| **Smart Demand & Spoilage Forecasting** | LSTM / Prophet models predict demand & shelf‑life   | Python, PyTorch, FastAPI | ↓ Overstock, ↓ Shrink |
| **Green Route Optimisation**            | Computes least‑carbon delivery paths in real time   | Google OR‑Tools, PostGIS | ↓ Fuel, ↓ CO₂         |
| **Blockchain Provenance**               | Immutable ledger for ethical & sustainable sourcing | Hyperledger Fabric, IPFS | ↑ Transparency        |
| **IoT Energy Dashboard**                | Edge sensors track HVAC, lighting, refrigeration    | MQTT, InfluxDB, React    | ↓ kWh, ↓ Cost         |

---

## 🛠️ Tech Stack

* **Backend** · Python 3.11 • FastAPI • PostgreSQL/PostGIS • Hyperledger Fabric
* **ML/AI** · PyTorch • Prophet • Google OR‑Tools • YOLOv8
* **Data & Messaging** · Kafka • MQTT • Redis
* **Frontend** · TypeScript • Next.js 14 • TailwindCSS • Recharts
* **DevOps** · Docker Compose • GitHub Actions • Terraform (optionally AWS‑EKS)

---

## 🏗️ Architecture (high‑level)

```
┌─────────┐  sensor data  ┌────────────────┐  API  ┌────────────┐
│  IoT    │──────────────▶│  Ingest &      │──────▶│  FastAPI    │
│  Edge   │               │  Stream (Kafka)│       │  Gateway    │
└─────────┘               └────────────────┘       └─────┬──────┘
                            ▲   predictions  ML svc │
                            │                        ▼
                        ┌──────────┐  writes   ┌──────────┐
                        │ ML/AI    │──────────▶│ Postgres │
                        │ Services │            └──────────┘
                            │  events
                            ▼
                      ┌──────────────┐
                      │ Hyperledger  │
                      │  Fabric      │
                      └──────┬───────┘
                             ▼
                        ┌─────────┐
                        │ Frontend│
                        └─────────┘
```

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
$ git clone https://github.com/<your‑org>/eco-supply-ai.git && cd eco-supply-ai

# 2. Copy environment variables template
$ cp .env.example .env

# 3. Spin everything up (Docker‑Compose)
$ docker compose up --build

# 4. Access services
- API – http://localhost:8000/docs
- Frontend – http://localhost:3000
- Blockchain Explorer – http://localhost:8080
```

### Local ML experiment

```bash
$ cd services/ml
$ poetry install
$ python train_demand_forecast.py --store WALMART001
```

---

## 🗺️ Roadmap

* [ ] Integrate live USDA weather & crop data for yield predictions
* [ ] Add NFC‑based smart packaging prototype
* [ ] Deploy to AWS EKS with ArgoCD & Keda autoscaling

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss your ideas.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/awesome`)
3. Commit changes (`git commit -m 'feat: add awesome'`)
4. Push to the branch (`git push origin feature/awesome`)
5. Open a PR

---

## 📄 License

Apache‑2.0 – see [`LICENSE`](LICENSE) for details.

---

## 📬 Contact

Made with ♥ by **Anjali Jaiswal** – [LinkedIn](https://www.linkedin.com/in/anjali‑jaiswal/)
