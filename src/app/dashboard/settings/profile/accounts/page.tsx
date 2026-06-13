"use client";

import {
  useEffect,
  useState,
} from "react";

export default function AccountsPage(){

  const [
    accounts,
    setAccounts
  ] = useState<any[]>([]);

  useEffect(()=>{

    fetch(
      "/api/profile/accounts"
    )
    .then(r=>r.json())
    .then(data=>{
      setAccounts(
        data.accounts
      );
    });

  },[]);

  return (
    <div className="space-y-4">

      <h1 className="text-2xl font-bold">
        Connected Accounts
      </h1>

      {accounts.map(account=>(
        <div
          key={account._id}
          className="border p-4 rounded"
        >
          {account.provider}
        </div>
      ))}

    </div>
  );
}