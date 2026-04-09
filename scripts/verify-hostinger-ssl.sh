#!/usr/bin/env bash
# DNS + HTTPS checks for sytsolutions.org on Hostinger.
# Run after hPanel changes: chmod +x scripts/verify-hostinger-ssl.sh && ./scripts/verify-hostinger-ssl.sh
set -euo pipefail

DOMAIN="${DOMAIN:-sytsolutions.org}"

echo "========== DNS: nameservers (${DOMAIN}) =========="
dig +short NS "$DOMAIN" | sed 's/\.$//' | sort -u

echo ""
echo "========== DNS: A / CNAME =========="
printf "A @: "
dig +short A "$DOMAIN"
printf "A www: "
dig +short A "www.$DOMAIN"
printf "CNAME www: "
dig +short CNAME "www.$DOMAIN"

PARKING=0
while IFS= read -r ns; do
  [[ -z "$ns" ]] && continue
  ns="${ns%.}"
  if [[ "$ns" == *dns-parking* ]]; then
    PARKING=1
  fi
done < <(dig +short NS "$DOMAIN")

echo ""
if [[ "$PARKING" -eq 1 ]]; then
  echo "WARNING: Nameservers still include dns-parking. Point the domain to Hostinger hosting (NS or A/CNAME per hPanel) before SSL can match your site."
else
  echo "Nameservers: no dns-parking substring detected (verify they match your Hostinger hosting instructions)."
fi

echo ""
echo "========== HTTPS: www.${DOMAIN} =========="
if curl -sSfI --max-time 25 "https://www.${DOMAIN}/" -o /dev/null 2>/dev/null; then
  echo "OK: TLS verified for https://www.${DOMAIN}/"
else
  echo "HTTPS check failed (common until Let's Encrypt covers www + apex on the correct vhost):"
  curl -sSI --max-time 25 "https://www.${DOMAIN}/" 2>&1 | head -8 || true
fi

echo ""
echo "========== Hostinger hPanel checklist (manual) =========="
cat <<'EOF'
0. Domains → your domain → DNS: replace parking with hosting nameservers OR edit DNS zone — A @ → hosting IPv4; www → same A or CNAME per Hostinger docs.
1. Websites → your site → Domains: attach sytsolutions.org and www.sytsolutions.org.
2. SSL → install Let's Encrypt; confirm SAN lists both apex and www.
3. Enable Force HTTPS.
4. Re-run this script after DNS propagates.
EOF
