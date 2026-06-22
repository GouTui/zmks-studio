import {
  call_rpc as inner_call_rpc,
  MetaError,
  NoResponseError,
  Request,
  RequestResponse,
  RpcConnection,
} from "@zmkfirmware/zmk-studio-ts-client";

export async function call_rpc(
  conn: RpcConnection,
  req: Omit<Request, "requestId">
): Promise<RequestResponse> {
  console.log("RPC Request", req);
  return inner_call_rpc(conn, req)
    .then((r) => {
      console.log("RPC Response", r);
      return r;
    })
    .catch((e) => {
      console.error("RPC Error", e);
      return e;
    });
}

export function unwrap_rpc_response(value: unknown): RequestResponse {
  if (value instanceof Error) {
    throw value;
  }

  if (!value || typeof value !== "object" || !("requestId" in value)) {
    throw new Error(typeof value === "string" ? value : "Invalid RPC response");
  }

  return value as RequestResponse;
}

export function format_rpc_error(error: unknown): string {
  if (error instanceof MetaError) {
    return `RPC ${error.condition}`;
  }

  if (error instanceof NoResponseError) {
    return "No RPC response received";
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "RPC error";
}
