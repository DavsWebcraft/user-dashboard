import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiHome,
  FiBox,
  FiUsers,
  FiBarChart2,
  FiTag,
  FiHelpCircle,
  FiLogOut,
  FiSearch,
} from "react-icons/fi";
import styles from "../styles/dashboard.module.css";

const cn = (...c) => c.filter(Boolean).join(" ");

// extract username for greeting
const getUsername = (user) => {
  // Always derive from the email prefix (everything before @)
  if (user?.email) return user.email.split("@")[0];
  return "User";
};

export default function Dashboard({ user }) {
  const firstName = getUsername(user);
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed((p) => !p);

  const rows = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555‑0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555‑0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Davison Felix",
      company: "Adobe",
      phone: "(234) 7034‑831603",
      email: "dynasty@yahoo.com",
      country: "France",
      status: "Inactive",
    },
    {
      name: "Ata Joshua",
      company: "Microsoft",
      phone: "(225) 555‑0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      name: "Mark Peters",
      company: "Yahoo",
      phone: "(205) 555‑0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
  ];

  return (
    <div className={styles.dashboard}>
      {/* ────────── SIDEBAR ────────── */}
      <aside className={cn(styles.sidebar, collapsed && styles.collapsed)}>
        <h1
          className={styles.brand}
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        >
          Dashboard<span style={{ fontSize: "x-small" }}>.v01</span>
        </h1>

        <nav className={styles.nav}>
          <ul>
            <li>
              <FiHome /> <span>Dashboard</span>
            </li>
            <li>
              <FiBox /> <span>Product</span>
            </li>
            <li
              style={{
                background: "#5932ea",
                borderRadius: "2rem",
              }}
            >
              <FiUsers /> <span>Customers</span>
            </li>
            <li>
              <FiBarChart2 /> <span>Income</span>
            </li>
            <li>
              <FiTag /> <span>Promote</span>
            </li>
            <li>
              <FiHelpCircle /> <span>Help</span>
            </li>
          </ul>
        </nav>

        <div className={styles.upgrade}>
          <img
            src="/accesspro.png"
            alt="Upgrade to Pro banner"
            className={styles.upgradeImg}
          />
        </div>

        <div className={styles.profile}>
          <img
            src={user?.photoURL || "https://i.pravatar.cc/100"}
            alt={firstName}
          />
          <div className={styles.profileInfo}>
            <p className={styles.role}>Project Manager</p>
          </div>
          <FiLogOut className={styles.logout} />
        </div>
      </aside>

      {/* ────────── CONTENT ────────── */}
      <main className={styles.content}>
        <header className={styles.header}>
          <h2>
            Hello {firstName}
            <span role="img" aria-label="wave">
              👋🏾,
            </span>
          </h2>

          <label className={styles.searchBox}>
            <FiSearch />
            <input type="search" placeholder="Search" />
          </label>
        </header>

        <section className={styles.stats}>
          <article className={styles.card}>
            <div
              className={cn(styles.icon, styles.customers)}
              style={{ backgroundImage: "url('/icon1.png')" }}
            ></div>
            <div>
              <p>Total Customers</p>
              <h3>5,423</h3>
              <span className={styles.up}>
                18% <span style={{ color: "black" }}>this month</span>
              </span>
            </div>
          </article>
          <article className={styles.card}>
            <div
              className={cn(styles.icon, styles.members)}
              style={{ backgroundImage: "url('/icon2.png')" }}
            ></div>
            <div>
              <p>Members</p>
              <h3>1,893</h3>
              <span className={styles.down}>
                1% <span style={{ color: "black" }}>this month</span>
              </span>
            </div>
          </article>
          <article className={styles.card}>
            <div
              className={cn(styles.icon, styles.activeNow)}
              style={{ backgroundImage: "url('/icon3.png')" }}
            ></div>
            <div>
              <p>Active Now</p>
              <h3>189</h3>
              <div className={styles.avatars}>
                {[...Array(5).keys()].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?u=${i}`}
                    alt="avatar"
                  />
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className={styles.tableWrap}>
          <header className={styles.tableHeader}>
            <div>
              <h3>All Customers</h3>
              <span className={styles.sub}>Active Members</span>
            </div>
            <div className="stress" style={{ display: "flex" }}>
              <label className={cn(styles.searchBox, styles.small)}>
                <FiSearch />
                <input type="search" placeholder="Search" />
              </label>

              <select defaultValue="Newest">
                <option>
                  <span style={{ color: "grey" }}>Sort by:</span> Newest
                </option>
                <option>Sort by: Oldest</option>
              </select>
            </div>
          </header>

          <div className={styles.scroll}>
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Company</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.email}>
                    <td>{r.name}</td>
                    <td>{r.company}</td>
                    <td>{r.phone}</td>
                    <td>{r.email}</td>
                    <td>{r.country}</td>
                    <td>
                      <span
                        className={cn(
                          styles.badge,
                          r.status === "Active"
                            ? styles.active
                            : styles.inactive
                        )}
                      >
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className={styles.tableFooter}>
            <p>Showing data 1 to 8 of 256K entries</p>
            <nav className={styles.pagination}>
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  className={cn(styles.pageButton, i === 0 && styles.current)}
                  aria-label={`page ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
              <span>…</span>
              <button aria-label="page 40">40</button>
            </nav>
          </footer>
        </section>
      </main>
    </div>
  );
}
