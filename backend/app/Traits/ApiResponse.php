<?php
namespace App\Traits;
use Illuminate\Http\Response;

trait ApiResponse
{
    public function successResponse($data, $statusCode = Response::HTTP_OK)
    {
        return response()->json(['data' => $data], $statusCode);
    }
    public function errorResponse($errorMessage, $statusCode)
    {
        return response()->json(['error' => $errorMessage, 'error_code' => $statusCode], $statusCode);
    }

    /**
     * Get Message. English is Default.
     *
     * @param $code string or array. Ex: $code = "KPI001"
     * @param ...$params
     *
     * @return mixed|null
     */
    public static function get($code, ...$params)
    {
        if (empty($code)) {
            return null;
        }
        $lang = array_get($_REQUEST, 'lang', 'VI');
        $message = array_get(config('messages'), "$code", ["EN" => "`$code`"]);
        $message = array_get($message, $lang, $message['EN']);

        if (!empty($params)) {
            foreach ($params as $key => $param) {
                $message = str_replace("{{$key}}", $param, $message);
            }
        }
        return $message;
    }
}
